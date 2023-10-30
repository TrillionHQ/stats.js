interface Stats {
  REVISION: number;
  dom: HTMLDivElement;
  addPanel(panel: Stats.Panel): Stats.Panel;
  showPanel(id: number): void;
  begin(): void;
  end(): number;
  update(): void;
  domElement: HTMLDivElement;
  setMode(id: number): void;
  /** Real-time fps */
  getFPS(): number;
  /** Ability to set the start of tracking average fps. Without calling this method, the average fps will be tracking from the very beginning. */
  startTrackAverageFps(): void;
  /** The general average FPS. Global frame number divided by global time. */
  getGeneralAverageFPS(): number;
}

declare function Stats(): Stats;

declare namespace Stats {
  interface Panel {
      dom: HTMLCanvasElement;
      update(value: number, maxValue: number): void;
  }

  function Panel(name?: string, fg?: string, bg?: string): Panel;
}

export default Stats;
