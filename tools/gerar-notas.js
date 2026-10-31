// Gera NOTAS-DE-APRESENTACAO.md a partir de notes.js.  Uso: node tools/gerar-notas.js
const fs = require("fs");
const path = require("path");
const root = path.join(__dirname, "..");
const src = fs.readFileSync(path.join(root, "notes.js"), "utf8");
const m = src.match(/var NOTES = (\[[\s\S]*?\n  \]);/);
if (!m) throw new Error("NOTES não encontrado em notes.js");
const notes = eval(m[1]);
const md = [
  "# Notas de apresentação — LK Technologies Brasil",
  "",
  "Alinhamento estratégico · 31 de outubro de 2026 · Lukas Alexandre Rosa & Leonardo Silva Kirime",
  "",
  "> Gerado a partir de `notes.js` (`node tools/gerar-notas.js`). Durante a apresentação, pressione **N** para ver as notas do slide atual.",
  "",
];
notes.forEach((n, i) => {
  md.push(`## ${String(i + 1).padStart(2, "0")} · ${n.title}`, "", `**Objetivo:** ${n.objetivo}`, "", `**O que dizer:** ${n.fala}`, "", "**Destaques**");
  n.destaque.forEach((d) => md.push(`- ${d}`));
  md.push("", "**Para discutir**");
  n.perguntas.forEach((q) => md.push(`- ${q}`));
  md.push("");
});
fs.writeFileSync(path.join(root, "NOTAS-DE-APRESENTACAO.md"), md.join("\n"));
console.log("ok", notes.length);
