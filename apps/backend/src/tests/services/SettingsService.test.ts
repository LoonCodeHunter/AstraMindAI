import { describe, it, expect } from 'vitest';
import { SettingsService } from '../../services/SettingsService';

describe('SettingsService', () => {
  it('returns settings', async () => {
    const svc = new SettingsService();
    const res = await svc.getSettings('u1');
    expect(res.userId).toBe('u1');
  });
});
