// Колонка ленты и поля ввода шире (в хабе .feed-inner/.dock-inner — 800px, абзац — 68 знаков), но с
// воздухом по бокам: симметричные поля до 70px (на узком окне уже), колонка по центру.
export default function register() {
  const st = document.createElement("style");
  st.textContent = `.app { --measure: 125ch; }
.feed-inner, .dock-inner { box-sizing: border-box; max-width: min(1500px, 100%); padding-inline: clamp(12px, 4vw, 70px); }`;
  document.head.append(st);
}
