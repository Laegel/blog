const watcher = Deno.watchFs("./app/.aleph/production");
for await (const event of watcher) {
  console.log(">>>> event", event);
  // { kind: "create", paths: [ "/foo.txt" ] }
  if (event.paths[0].endsWith("app.tailwind.css.js")) {
    Deno.writeFile("app/.aleph/production/app.tailwind.css.bundling.js", new Uint8Array());
  }
}