import type { NodeType } from '@/entities/node/@x/processor';

export enum ProcessorType {
  SOURCE = 'source',
  LOGIC = 'logic',
  OUTPUT = 'output',
}

export type LogicValue = boolean | null;

export interface BaseProcessor {
  readonly type: NodeType;
  readonly processorType: ProcessorType;
  readonly propagationDelay: number;
}

export interface SourceProcessor extends BaseProcessor {
  readonly processorType: ProcessorType.SOURCE;

  readonly defaultValue: boolean;
}

export interface LogicProcessor extends BaseProcessor {
  readonly processorType: ProcessorType.LOGIC;
  compute(inputs: LogicValue[]): LogicValue;
}

export interface OutputProcessor extends BaseProcessor {
  readonly processorType: ProcessorType.OUTPUT;
  transform(inputs: LogicValue[]): LogicValue;
}

export type Processor = SourceProcessor | LogicProcessor | OutputProcessor;
