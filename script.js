(function () {
  var c = window.SITE_CONFIG || {}, d = document;
  var $ = function (id) { return d.getElementById(id); };
  var t = function (v) { return typeof v === "string" ? v.trim() : ""; };
  var name = t(c.businessName) || "Your Brand";
  var heading = t(c.heading), desc = t(c.description);

  d.title = t(c.pageTitle) || name + " | Coming Soon";
  if (t(c.description)) d.querySelector('meta[name="description"]').content = desc;
  if (t(c.businessName)) { $("name").textContent = name; $("name").hidden = false; }
  if (heading) $("heading").textContent = heading;
  if (desc) $("desc").textContent = desc;

  var root = d.documentElement.style;
  if (/^#[0-9a-f]{3,8}$/i.test(t(c.primaryColor))) root.setProperty("--ink", c.primaryColor.trim());
  if (/^#[0-9a-f]{3,8}$/i.test(t(c.accentColor))) { root.setProperty("--accent", c.accentColor.trim()); root.setProperty("--accent2", c.accentColor.trim()); }

  if (t(c.favicon)) $("favicon").href = c.favicon.trim();
  if (t(c.logo)) {
    var img = new Image();
    img.alt = ""; img.onload = function () { $("mark").textContent = ""; $("mark").appendChild(img); };
    img.src = c.logo.trim();
  }

  // Contact methods: only configured ones appear
  var list = $("contactList"), first = "";
  function add(label, href, ext) {
    var li = d.createElement("li"), a = d.createElement("a");
    a.textContent = label; a.href = href;
    if (ext) { a.target = "_blank"; a.rel = "noopener noreferrer"; }
    li.appendChild(a); list.appendChild(li); if (!first) first = href;
  }
  var email = t(c.email), phone = t(c.phone), wa = t(c.whatsapp).replace(/\D/g, "");
  if (email) add(email, "mailto:" + email);
  if (phone) add(phone, "tel:" + phone.replace(/[^\d+]/g, ""));
  if (wa) add("WhatsApp", "https://wa.me/" + wa, true);
  if (list.children.length) {
    $("contact").hidden = false;
    $("btnContact").hidden = false;
  }

  // Stay Connected: first available social link, else website URL
  var s = c.social || {}, link = "";
  ["facebook", "instagram", "linkedin", "x", "youtube"].forEach(function (k) {
    var u = t(s[k]);
    if (/^https?:\/\//i.test(u)) {
      if (!link) link = u;
      add(k === "x" ? "X" : k.charAt(0).toUpperCase() + k.slice(1), u, true);
    }
  });
  if (!link && /^https?:\/\//i.test(t(c.websiteUrl))) link = c.websiteUrl.trim();
  if (link) { var b = $("btnConnect"); b.href = link; b.target = "_blank"; b.rel = "noopener noreferrer"; b.hidden = false; }
  if (list.children.length) $("contact").hidden = false;
  if (!$("btnContact").hidden && !list.children.length) $("btnContact").hidden = true;
  if ($("cta").querySelectorAll(".btn:not([hidden])").length === 0) $("cta").hidden = true;

  // Footer
  $("copy").textContent = "\u00A9 " + new Date().getFullYear() + " " + name + ". All rights reserved.";
  var nav = $("footNav");
  function fl(label, href) { var a = d.createElement("a"); a.textContent = label; a.href = href; nav.appendChild(a); }
  if (t(c.privacyUrl)) fl("Privacy Policy", c.privacyUrl.trim());
  if (list.children.length && !$("contact").hidden) fl("Contact", "#contact");
  if (!nav.children.length) nav.hidden = true;
})();
