"""
Set CLOUDFLARE_API_TOKEN and CLOUDFLARE_ACCOUNT_ID as encrypted GitHub repo secrets.

Reads from environment variables only — does NOT echo token values.
"""
import base64
import json
import os
import sys
import urllib.request
import urllib.error

# Force pynacl from user site-packages if needed
sys.path.insert(0, "/home/z/.local/lib/python3.13/site-packages")
from nacl import public  # type: ignore


GH_TOKEN = os.environ.get("GH_TOKEN")
CF_TOKEN = os.environ.get("CF_TOKEN")
REPO = "lutfananas/bkh-tlg"

if not GH_TOKEN or not CF_TOKEN:
    print("ERROR: GH_TOKEN and CF_TOKEN env vars must be set", file=sys.stderr)
    sys.exit(1)


def gh_request(method, path, body=None):
    url = f"https://api.github.com/repos/{REPO}/{path}"
    data = json.dumps(body).encode() if body else None
    req = urllib.request.Request(
        url, data=data, method=method,
        headers={
            "Accept": "application/vnd.github+json",
            "Authorization": f"Bearer {GH_TOKEN}",
            "X-GitHub-Api-Version": "2022-11-28",
            "Content-Type": "application/json",
        },
    )
    try:
        with urllib.request.urlopen(req) as r:
            txt = r.read().decode()
            return r.status, (json.loads(txt) if txt else {})
    except urllib.error.HTTPError as e:
        return e.code, e.read().decode()


def cf_get_accounts():
    req = urllib.request.Request(
        "https://api.cloudflare.com/client/v4/accounts",
        headers={"Authorization": f"Bearer {CF_TOKEN}"},
    )
    try:
        with urllib.request.urlopen(req) as r:
            return json.loads(r.read().decode())
    except urllib.error.HTTPError as e:
        body = e.read().decode()
        print(f"[ERR] Cloudflare API HTTP {e.code}: {body}", file=sys.stderr)
        sys.exit(6)
    except Exception as e:
        print(f"[ERR] Cloudflare API exception: {e}", file=sys.stderr)
        sys.exit(7)


def encrypt_secret(public_key_b64: str, value: str) -> str:
    pub = public.PublicKey(base64.b64decode(public_key_b64))
    sealed = public.SealedBox(pub)
    return base64.b64encode(sealed.encrypt(value.encode())).decode()


def set_repo_secret(name: str, value: str):
    # 1. Get repo public key
    status, key_info = gh_request("GET", "actions/secrets/public-key")
    if status != 200:
        print(f"[ERR] get public key: {status} {key_info}", file=sys.stderr)
        sys.exit(2)
    print(f"[ok] repo public-key retrieved (key_id={key_info['key_id']})")

    # 2. Encrypt
    encrypted_b64 = encrypt_secret(key_info["key"], value)

    # 3. PUT secret
    body = {"encrypted_value": encrypted_b64, "key_id": key_info["key_id"]}
    status, resp = gh_request("PUT", f"actions/secrets/{name}", body=body)
    if status not in (201, 204):
        print(f"[ERR] set secret {name}: {status} {resp}", file=sys.stderr)
        sys.exit(3)
    print(f"[ok] secret '{name}' set on {REPO}")


def main():
    # 1. Get Cloudflare account ID
    data = cf_get_accounts()
    if not data.get("success"):
        print(f"[ERR] Cloudflare API call failed: {data.get('errors')}", file=sys.stderr)
        sys.exit(4)
    accounts = data["result"]
    if not accounts:
        print("[ERR] No Cloudflare accounts found for this token", file=sys.stderr)
        sys.exit(5)
    account_id = accounts[0]["id"]
    account_name = accounts[0].get("name", "")
    print(f"[ok] Cloudflare account resolved: {account_name} ({account_id})")

    # 2. Set both secrets
    set_repo_secret("CLOUDFLARE_API_TOKEN", CF_TOKEN)
    set_repo_secret("CLOUDFLARE_ACCOUNT_ID", account_id)

    print("\nAll secrets set. Next: trigger workflow re-run.")


if __name__ == "__main__":
    main()
