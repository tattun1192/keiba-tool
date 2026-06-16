/**
 * 期待値計算エンジン
 * 競馬予想の期待値を計算するユーティリティ関数群
 */

export interface TicketExpectation {
  ticketType: 'fukusho' | 'wide' | 'barenren' | 'barenntan';
  expectedValue: number;
  recommendedBet: number;
  recommendation: 'buy' | 'skip';
}

/**
 * 複勝の期待値を計算
 * EV = (推定勝率 × オッズ × (1 - 控除率)) - 1
 */
export function calculateFukushoEV(
  estimatedWinRate: number,
  odds: number,
  controlRate: number = 0.20
): number {
  const ev = (estimatedWinRate * odds * (1 - controlRate)) - 1;
  return ev;
}

/**
 * ワイドの期待値を計算
 * ワイドは複数の組み合わせが必要
 */
export function calculateWideEV(
  horse1WinRate: number,
  horse2WinRate: number,
  odds: number,
  controlRate: number = 0.225
): number {
  // ワイドは 1-2 または 2-1 の組み合わせで当たる
  const combinationWinRate = horse1WinRate * horse2WinRate * 2;
  const ev = (combinationWinRate * odds * (1 - controlRate)) - 1;
  return ev;
}

/**
 * 馬連の期待値を計算
 */
export function calculateBarenrenEV(
  horse1WinRate: number,
  horse2WinRate: number,
  odds: number,
  controlRate: number = 0.225
): number {
  // 馬連は順不同なので、1-2 と 2-1 の組み合わせ
  const combinationWinRate = horse1WinRate * horse2WinRate * 2;
  const ev = (combinationWinRate * odds * (1 - controlRate)) - 1;
  return ev;
}

/**
 * 三連単の期待値を計算
 */
export function calculateSanrentan(
  horse1WinRate: number,
  horse2PlaceRate: number,
  horse3ShowRate: number,
  odds: number,
  controlRate: number = 0.275
): number {
  const combinationWinRate = horse1WinRate * horse2PlaceRate * horse3ShowRate;
  const ev = (combinationWinRate * odds * (1 - controlRate)) - 1;
  return ev;
}

/**
 * Kelly 基準でベットサイズを計算
 * ベットサイズ(f) = (期待値 × 勝率 + (1 - 勝率)) / オッズ
 * ただし、競馬では保守的に 1/4 Kelly を使う
 */
export function calculateKellyBet(
  bankroll: number,
  expectedValue: number,
  winRate: number,
  odds: number,
  kellyFraction: number = 0.25
): number {
  if (expectedValue <= 0) {
    return 0; // 期待値がマイナスなら賭けない
  }

  // Kelly公式の簡易版
  const kellyFull = (expectedValue * winRate) / odds;
  const kellyBet = Math.max(0, kellyFull * kellyFraction * bankroll);

  return Math.round(kellyBet);
}

/**
 * 複数の馬を組み合わせた複勝の期待値を計算
 */
export function calculateMultipleFukusho(
  horses: Array<{ winRate: number; odds: number }>,
  totalBankroll: number
): TicketExpectation[] {
  return horses.map((horse, index) => {
    const ev = calculateFukushoEV(horse.winRate, horse.odds);
    const recommendedBet = calculateKellyBet(
      totalBankroll,
      ev,
      horse.winRate,
      horse.odds
    );

    return {
      ticketType: 'fukusho',
      expectedValue: ev,
      recommendedBet,
      recommendation: ev > 0 ? 'buy' : 'skip',
    };
  });
}
