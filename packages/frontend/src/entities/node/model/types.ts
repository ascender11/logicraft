import { z } from 'zod';

import type { NodeTypeSchema } from './contracts';

export type NodeType = z.infer<typeof NodeTypeSchema>;
