import type { CircuitNodeId, SimulationEvent } from '../model/types';

export class EventManager {
  private queue: SimulationEvent[] = [];
  private currentTime: number = 0;

  public getCurrentTime(): number {
    return this.currentTime;
  }

  public hasEvents(): boolean {
    return this.queue.length !== 0;
  }

  public scheduleEvent(event: SimulationEvent): void {
    let left = 0;
    let right = this.queue.length;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (this.queue[mid].timestamp <= event.timestamp) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    this.queue.splice(left, 0, event);
  }

  public cancelEventsForNode(nodeId: CircuitNodeId) {
    this.queue = this.queue.filter((event) => event.nodeId !== nodeId);
  }

  public processNextEvent(): SimulationEvent | null {
    if (this.queue.length === 0) {
      return null;
    }

    const event = this.queue.shift()!;
    this.currentTime = event.timestamp;
    return event;
  }
}
