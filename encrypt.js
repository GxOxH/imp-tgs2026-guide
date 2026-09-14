/* Encrypt the built guide into a self-unlocking page.
   PBKDF2-SHA256 (300k) -> AES-256-GCM. Matches Web Crypto on the client. */
const fs = require("fs");
const crypto = require("crypto");

const USER = process.argv[2] || "IMP";
const PASS = process.argv[3] || "SHIKONE";
const SRC = "D:/Dev/projects/2026-09-14_tgs-2026-program/TGS2026_guide.html";
const OUT = "D:/Dev/projects/2026-09-14_tgs-2026-program/index.html";
const ITER = 300000;

const plain = fs.readFileSync(SRC);
const salt = crypto.randomBytes(16);
const iv = crypto.randomBytes(12);
const secret = USER + "\n" + PASS;
const key = crypto.pbkdf2Sync(Buffer.from(secret, "utf8"), salt, ITER, 32, "sha256");

const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
const ct = Buffer.concat([cipher.update(plain), cipher.final()]);
const tag = cipher.getAuthTag();
const payload = Buffer.concat([ct, tag]).toString("base64");

/* verification hash so a wrong password fails fast with a clear message */
const check = crypto.createHash("sha256").update(Buffer.concat([key, salt])).digest("base64");

const logo = "data:image/png;base64," + fs.readFileSync("logo_256.png").toString("base64");
const icon = "data:image/png;base64," + fs.readFileSync("logo_96.png").toString("base64");

const page = `<!doctype html>
<html lang="ja">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<meta name="theme-color" content="#1F1F1F">
<title>IMP TGS2026 ガイド</title>
<link rel="icon" type="image/png" href="${icon}">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800;900&family=Noto+Sans+JP:wght@400;500;700;900&display=swap">
<style>
:root{--bg:#1F1F1F;--panel:#262626;--panel2:#1A1A1A;--ink:#fff;--ink2:#C9C9CB;--muted:#8C8C90;
  --line:#3D3D3D;--line2:#585858;--accent:#FF0054;--accent2:#FF6E9B;
  --font:"Inter","Noto Sans JP","Hiragino Kaku Gothic ProN","Yu Gothic",Meiryo,sans-serif;color-scheme:dark}
*{box-sizing:border-box}
body{margin:0;min-height:100vh;background:var(--bg);color:var(--ink);font-family:var(--font);
  display:grid;place-items:center;padding:24px 18px;
  background-image:linear-gradient(rgba(255,255,255,.035) 1px,transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,.035) 1px,transparent 1px);background-size:38px 38px}
.gate{width:100%;max-width:420px;border:1px solid var(--line);background:var(--panel);padding:30px 28px 26px}
.brand{display:flex;align-items:center;gap:14px;margin-bottom:22px}
.brand img{width:56px;height:56px;background:#1F1F1F;border:1px solid var(--line);flex:none}
.brand .k{font-size:10px;font-weight:800;letter-spacing:.18em;text-transform:uppercase;color:var(--accent)}
.brand .t{font-size:16px;font-weight:900;letter-spacing:.02em;margin-top:3px}
h1{margin:0 0 6px;font-size:20px;font-weight:900;letter-spacing:-.02em}
.lead{margin:0 0 22px;font-size:12.5px;color:var(--ink2);line-height:1.8}
label{display:block;font-size:9.5px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;color:var(--muted);margin:0 0 6px}
input{width:100%;font:inherit;font-size:16px;padding:12px 13px;background:var(--panel2);
  border:1px solid var(--line);color:var(--ink);outline:none;margin-bottom:16px}
input:focus{border-color:var(--accent)}
button{width:100%;font:inherit;font-size:12px;font-weight:800;letter-spacing:.16em;text-transform:uppercase;
  padding:14px;background:var(--accent);border:1px solid var(--accent);color:#fff;cursor:pointer;
  clip-path:polygon(0 0,calc(100% - 11px) 0,100% 11px,100% 100%,0 100%)}
button:hover{background:#fff;border-color:#fff;color:#000}
button:disabled{background:var(--panel2);border-color:var(--line);color:var(--muted);cursor:default;clip-path:none}
.msg{margin-top:14px;font-size:12px;min-height:18px;color:var(--accent2);line-height:1.6}
.msg.ok{color:var(--ink2)}
.note{margin-top:20px;padding-top:16px;border-top:1px solid var(--line);font-size:10.5px;color:var(--muted);line-height:1.75}
.bar{height:3px;background:var(--panel2);margin-top:14px;overflow:hidden;display:none}
.bar.on{display:block}
.bar i{display:block;height:100%;width:30%;background:var(--accent);animation:sl 1s linear infinite}
@keyframes sl{from{transform:translateX(-100%)}to{transform:translateX(400%)}}
.shake{animation:sh .32s}
@keyframes sh{0%,100%{transform:none}25%{transform:translateX(-6px)}75%{transform:translateX(6px)}}
@media (prefers-reduced-motion:reduce){*{animation:none!important}}
</style>
</head>
<body>
<main class="gate" id="gate">
  <div class="brand">
    <img src="${logo}" alt="IMP" width="56" height="56">
    <div><div class="k">Tokyo Game Show 2026</div><div class="t">IMP TGS2026 ガイド</div></div>
  </div>
  <h1>閲覧にはIDとパスワードが必要です</h1>
  <p class="lead">このページの内容は暗号化されています。正しいIDとパスワードを入力すると、お使いのブラウザ上で復号して表示されます。</p>
  <form id="f" autocomplete="off">
    <label for="u">ID</label>
    <input id="u" type="text" autocapitalize="characters" autocomplete="username" spellcheck="false" required>
    <label for="p">Password</label>
    <input id="p" type="password" autocomplete="current-password" required>
    <button id="b" type="submit">開く</button>
  </form>
  <div class="bar" id="bar"><i></i></div>
  <div class="msg" id="m" role="status" aria-live="polite"></div>
  <p class="note">身内向けの限定公開ページです。イベント終了後に閉じます。<br>
  入力内容はどこにも送信されず、ブラウザ内でのみ照合されます。</p>
</main>
<script>
(function(){
  var D={s:"${salt.toString("base64")}",v:"${iv.toString("base64")}",c:"${check}",i:${ITER},d:"${payload}"};
  var f=document.getElementById("f"),u=document.getElementById("u"),p=document.getElementById("p"),
      b=document.getElementById("b"),m=document.getElementById("m"),bar=document.getElementById("bar"),
      gate=document.getElementById("gate");
  function b2a(s){var r=atob(s),n=r.length,a=new Uint8Array(n);for(var i=0;i<n;i++)a[i]=r.charCodeAt(i);return a.buffer;}
  function ab2b64(buf){var a=new Uint8Array(buf),s="";for(var i=0;i<a.length;i++)s+=String.fromCharCode(a[i]);return btoa(s);}
  if(!window.crypto||!crypto.subtle){m.textContent="このブラウザでは復号できません。HTTPSで開いているかご確認ください。";b.disabled=true;return;}

  function derive(user,pass){
    var enc=new TextEncoder();
    return crypto.subtle.importKey("raw",enc.encode(user+"\\n"+pass),{name:"PBKDF2"},false,["deriveBits"])
      .then(function(k){return crypto.subtle.deriveBits(
        {name:"PBKDF2",salt:b2a(D.s),iterations:D.i,hash:"SHA-256"},k,256);});
  }
  function unlock(user,pass,quiet){
    b.disabled=true;bar.classList.add("on");
    m.className="msg ok";m.textContent="復号しています…";
    return derive(user,pass).then(function(bits){
      return crypto.subtle.digest("SHA-256",concat(bits,b2a(D.s))).then(function(h){
        if(ab2b64(h)!==D.c) throw new Error("bad");
        return crypto.subtle.importKey("raw",bits,{name:"AES-GCM"},false,["decrypt"]);
      });
    }).then(function(key){
      return crypto.subtle.decrypt({name:"AES-GCM",iv:b2a(D.v)},key,b2a(D.d));
    }).then(function(plain){
      try{sessionStorage.setItem("imp-tgs-u",user);sessionStorage.setItem("imp-tgs-p",pass);}catch(e){}
      var html=new TextDecoder().decode(plain);
      document.open();document.write(html);document.close();
    }).catch(function(){
      b.disabled=false;bar.classList.remove("on");
      if(quiet){m.textContent="";return;}
      m.className="msg";m.textContent="IDまたはパスワードが違います。";
      gate.classList.remove("shake");void gate.offsetWidth;gate.classList.add("shake");
      p.value="";p.focus();
    });
  }
  function concat(a,b){var x=new Uint8Array(a),y=new Uint8Array(b),z=new Uint8Array(x.length+y.length);
    z.set(x,0);z.set(y,x.length);return z.buffer;}

  f.addEventListener("submit",function(e){e.preventDefault();
    var uu=u.value.trim().toUpperCase(),pp=p.value;
    if(!uu||!pp){m.className="msg";m.textContent="IDとパスワードを入力してください。";return;}
    unlock(uu,pp,false);});

  try{
    var su=sessionStorage.getItem("imp-tgs-u"),sp=sessionStorage.getItem("imp-tgs-p");
    if(su&&sp){u.value=su;unlock(su,sp,true);}
  }catch(e){}
  u.focus();
})();
</script>
</body>
</html>
`;

fs.writeFileSync(OUT, page);
console.log("plain   :", plain.length, "bytes");
console.log("cipher  :", payload.length, "bytes (base64)");
console.log("index   :", fs.statSync(OUT).size, "bytes");
console.log("salt    :", salt.toString("base64"));
console.log("iter    :", ITER);
console.log("id/pass :", USER + " / " + PASS);
