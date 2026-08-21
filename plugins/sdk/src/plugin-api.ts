export class PluginAPI {
  load(manifest: any) {
    return `Loaded plugin: ${manifest.name}`;
  }
}
