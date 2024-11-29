import axios from 'axios';
import { fetchWeather } from '../src/myModule';
jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Weather Fetching', () => {
  test('Fetches weather description for a valid city', async () => {
    mockedAxios.get.mockResolvedValue({
      data: {
        weather: [{ description: 'clear sky' }],
      },
    });

    const weather = await fetchWeather('Kyiv');
    expect(weather).toBe('clear sky');
  });

  test('Handles error gracefully for invalid city', async () => {
    mockedAxios.get.mockRejectedValue(new Error('City not found'));

    await expect(fetchWeather('InvalidCity')).rejects.toThrow('City not found');
  });
});
