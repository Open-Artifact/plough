import { TransformPlugin } from "../../plugins/TransformPlugin";

export default class SaveSetOptions {
  public downloadImages: boolean = false;
  public redownloadImages: boolean = false;
  public fragmentCards: boolean = false;
  public log: boolean = false;
  public language: string = "default";
  public transformPlugin!: TransformPlugin;

  constructor(options?: Partial<SaveSetOptions>) {
    Object.assign(this, options);
  }
}
