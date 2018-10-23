import { PrimerModule } from './primer.module';

describe('PrimerModule', () => {
  let primerModule: PrimerModule;

  beforeEach(() => {
    primerModule = new PrimerModule();
  });

  it('should create an instance', () => {
    expect(primerModule).toBeTruthy();
  });
});
