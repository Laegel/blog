const watcher = Deno.watchFs("./app/.aleph/production");
for await (const event of watcher) {
  console.log(">>>> event", event);
  // { kind: "create", paths: [ "/foo.txt" ] }
  if (event.paths[0].endsWith(".tailwind.css.bundling.js")) {
    Deno.writeFile(event.paths[0], new Uint8Array());
  }
}