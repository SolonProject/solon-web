import { Structure } from '@solon/environment';
import * as fs from 'fs-extra';
import * as path from 'path';
import * as lockfile from 'proper-lockfile';

interface Tracker {
  [name: string]: string;
}

export const update = (name: string, address: string) => {
  fs.ensureFileSync(Structure.contracts.tracker);

  try {
    const release = lockfile.lockSync(Structure.contracts.tracker);
    const content = fs.readFileSync(Structure.contracts.tracker).toString('utf-8') || '{}';
    const tracker: Tracker = JSON.parse(content);
    tracker[name] = address;
    fs.writeJSONSync(Structure.contracts.tracker, tracker);
  } finally {
    lockfile.unlockSync(Structure.contracts.tracker);
  }
};