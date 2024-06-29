import { Card } from "../types/card.type";
import { API_BASE_URL } from "../utils/constants";

export const fetchCollection = async (): Promise<Card[]> => {
  const cardsData = await fetch(`${API_BASE_URL}/cards`)
  return await cardsData.json() as Promise<Card[]>
};
