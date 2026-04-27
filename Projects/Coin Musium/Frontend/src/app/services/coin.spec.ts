import { Injectable, signal } from '@angular/core';

export interface Coin {
  id: string;
  name: string;
  mint: string;
  issueDate: string;
  imageUrl: string;
  description: string;
  isOwned: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CoinService {
  // Mock Data
  private initialCoins: Coin[] = [
    {
      id: '1',
      name: '1 Rupee (Lion Capital)',
      mint: 'Mumbai',
      issueDate: '1950',
      imageUrl: 'https://placehold.co/300x300/e0e0e0/666?text=1+Rupee',
      description: 'The first Republic of India coins were introduced on 15 August 1950.',
      isOwned: false
    },
    {
      id: '2',
      name: '2 Rupees (National Integration)',
      mint: 'Kolkata',
      issueDate: '1992',
      imageUrl: 'https://placehold.co/300x300/e0e0e0/666?text=2+Rupees',
      description: 'Features the map of India with the national flag.',
      isOwned: true
    },
    {
      id: '3',
      name: '5 Rupees (Indira Gandhi)',
      mint: 'Hyderabad',
      issueDate: '1985',
      imageUrl: 'https://placehold.co/300x300/e0e0e0/666?text=5+Rupees',
      description: 'Commemorative coin issued to mark the death of Indira Gandhi.',
      isOwned: false
    }
  ];

  // Global state using Signals
  coins = signal<Coin[]>(this.initialCoins);

  getCoinById(id: string): Coin | undefined {
    return this.coins().find(c => c.id === id);
  }

  toggleOwnership(id: string) {
    this.coins.update(currentCoins =>
      currentCoins.map(coin =>
        coin.id === id ? { ...coin, isOwned: !coin.isOwned } : coin
      )
    );
  }
}