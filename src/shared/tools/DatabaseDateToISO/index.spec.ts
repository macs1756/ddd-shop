// database-data-to-iso.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseDataToISO } from './index';

describe('DatabaseDataToISO', () => {
  let service: DatabaseDataToISO;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatabaseDataToISO],
    }).compile();

    service = module.get<DatabaseDataToISO>(DatabaseDataToISO);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should convert a Date object to ISO date string', () => {
    const date = new Date('2025-11-03T10:30:00Z');
    const result = service.execute(date);
    expect(result).toBe('2025-11-03');
  });

  it('should convert a string date to ISO date string', () => {
    const dateStr = '2025-11-03 15:45:00';
    const result = service.execute(dateStr);
    expect(result).toBe('2025-11-03');
  });

  it('should handle ISO string with timezone', () => {
    const isoStr = '2025-11-03T00:00:00+02:00';
    const result = service.execute(isoStr);
    expect(result).toBe('2025-11-02');
  });
});
