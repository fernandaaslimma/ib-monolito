import { getPortabilities, getInstitutions, getPositions, requestPortability } from './index';
import fetchHandler from '../../utils/fetchHandler';

jest.mock('../../utils/fetchHandler');

describe('API Functions', () => {
  const mockApiUrl = 'https://api.dev.bocombbm.com.br';

  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('getPortabilities', () => {
    it('should call fetchHandler with the correct URL', async () => {
      fetchHandler.mockResolvedValueOnce({ data: 'mockData' });

      const result = await getPortabilities();

      expect(fetchHandler).toHaveBeenCalledWith(`${mockApiUrl}/investmentsportability/v1/portabilities`);
      expect(result).toEqual({ data: 'mockData' });
    });
  });

  describe('getInstitutions', () => {
    it('should call fetchHandler with the correct URL', async () => {
      fetchHandler.mockResolvedValueOnce({ data: 'mockData' });

      const result = await getInstitutions();

      expect(fetchHandler).toHaveBeenCalledWith(`${mockApiUrl}/investmentsportability/v1/institutions`);
      expect(result).toEqual({ data: 'mockData' });
    });
  });

  describe('getPositions', () => {
    it('should call fetchHandler with the correct URL and investorId', async () => {
      const investorId = '12345';
      fetchHandler.mockResolvedValueOnce({ data: 'mockData' });

      const result = await getPositions(investorId);

      expect(fetchHandler).toHaveBeenCalledWith(`${mockApiUrl}/investmentsportability/v1/positions?investorId=${investorId}`);
      expect(result).toEqual({ data: 'mockData' });
    });
  });

  describe('requestPortability', () => {
    it('should call fetchHandler with the correct URL, method, body, and headers', async () => {
      const body = { key: 'value' };
      fetchHandler.mockResolvedValueOnce({ data: 'mockData' });

      const result = await requestPortability(body);

      expect(fetchHandler).toHaveBeenCalledWith(`${mockApiUrl}/investmentsportability/v1/portabilities`, {
        method: 'POST',
        body: JSON.stringify(body),
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      });
      expect(result).toEqual({ data: 'mockData' });
    });
  });
});