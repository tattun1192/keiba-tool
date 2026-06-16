'use client';

import { useState } from 'react';

export default function Home() {
  const [odds, setOdds] = useState<number | string>('');
  const [winRate, setWinRate] = useState<number | string>('');
  const [expectedValue, setExpectedValue] = useState<number | null>(null);

  const calculateEV = () => {
    if (!odds || !winRate) {
      alert('オッズと勝率を入力してください');
      return;
    }

    const oddsNum = parseFloat(odds as string);
    const winRateNum = parseFloat(winRate as string) / 100;
    const controlRate = 0.20; // 複勝の控除率

    // EV = (推定勝率 × オッズ × (1 - 控除率)) - 1
    const ev = (winRateNum * oddsNum * (1 - controlRate)) - 1;
    setExpectedValue(ev);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* サイドバー */}
      <aside className="md:col-span-1">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-bold mb-4">ツール情報</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>✓ 複勝・ワイド・馬連対応予定</li>
            <li>✓ 期待値がプラスのみ買う</li>
            <li>✓ Kelly 基準でベットサイズ自動計算</li>
          </ul>
        </div>
      </aside>

      {/* メインコンテンツ */}
      <main className="md:col-span-2">
        <div className="bg-white rounded-lg shadow p-8">
          <h1 className="text-3xl font-bold mb-2">期待値計算機</h1>
          <p className="text-gray-500 mb-6">複勝の期待値を計算します</p>

          <div className="space-y-6">
            {/* オッズ入力 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                オッズ（例: 3.5）
              </label>
              <input
                type="number"
                step="0.1"
                value={odds}
                onChange={(e) => setOdds(e.target.value)}
                placeholder="3.5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* 勝率入力 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                推定勝率（％）（例: 30）
              </label>
              <input
                type="number"
                step="1"
                value={winRate}
                onChange={(e) => setWinRate(e.target.value)}
                placeholder="30"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* 計算ボタン */}
            <button
              onClick={calculateEV}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
            >
              期待値を計算
            </button>

            {/* 結果表示 */}
            {expectedValue !== null && (
              <div
                className={`p-4 rounded-lg ${
                  expectedValue > 0
                    ? 'bg-green-50 border border-green-200'
                    : 'bg-red-50 border border-red-200'
                }`}
              >
                <h3 className="font-bold mb-2">計算結果</h3>
                <p className="text-sm text-gray-600 mb-2">
                  期待値: <span className="font-bold">{expectedValue.toFixed(3)}</span>
                </p>
                <p className="text-sm">
                  {expectedValue > 0 ? (
                    <span className="text-green-700 font-bold">
                      ✓ 期待値プラス（買い推奨）
                    </span>
                  ) : (
                    <span className="text-red-700 font-bold">
                      ✗ 期待値マイナス（見送り推奨）
                    </span>
                  )}
                </p>
              </div>
            )}
          </div>

          {/* 注意事項 */}
          <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              ⚠️ これはツールのテスト版です。予想の的中を保証するものではありません。
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
