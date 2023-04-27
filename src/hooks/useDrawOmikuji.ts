import { useState } from "react";

const omikujiList = ['大吉', '中吉', '吉', '小吉', '末吉', '凶'] as const;

// おみくじ結果を配列から抽出した個々の型を定義＋export
export type OmikujiResult = typeof omikujiList[number];


function useDrawOmikuji() {

  // おみくじ結果とおみくじを引いている状態の管理
  const [result, setResult] = useState<OmikujiResult | ''>('');
  const [isDrawing, setIsDrawing] = useState(false);

  // おみくじを引く関数を定義
  const drawOmikuji = () => {

    const maxCount = 10;
    setIsDrawing(true);

    // おみくじ結果を取得、setTimeoutで200msごとに再帰的にmaxCountで定義した回数だけ繰り返す。（200ms × maxCountの間ランダムで表示される）
    const omikujiResult = (count: number) => {

        if (count >= maxCount) {
            setIsDrawing(false);
            return;
        }

        setResult(omikujiList[Math.floor(Math.random() * omikujiList.length)]);

        setTimeout(() => omikujiResult(count + 1), 200);
    };

    omikujiResult(0);
    
    };

    return { result, isDrawing, drawOmikuji };

};

export default useDrawOmikuji;
