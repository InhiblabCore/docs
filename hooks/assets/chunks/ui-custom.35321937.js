import {
  e as r,
  ax as i,
  ay as d,
  r as l,
  j as _,
  i as u,
  o as p,
  c as f,
} from "../app.032845d0.js";
const A = r({
  __name: "VPCarbonAds",
  setup(m) {
    const { theme: o } = i(),
      a = o.value.carbonAds,
      { isAsideEnabled: n } = d(),
      s = l();
    let t = !1;
    function c() {
      if (!t) {
        t = !0;
        const e = document.createElement("script");
        (e.id = "_carbonads_js"),
          (e.src = `//cdn.carbonads.com/carbon.js?serve=${a.code}&placement=${a.placement}`),
          (e.async = !0),
          s.value.appendChild(e);
      }
    }
    return (
      a &&
        _(() => {
          n.value ? c() : u(n, (e) => e && c());
        }),
      (e, b) => (
        p(),
        f(
          "div",
          { class: "VPCarbonAds", ref_key: "container", ref: s },
          null,
          512
        )
      )
    );
  },
});

export { A as default };
