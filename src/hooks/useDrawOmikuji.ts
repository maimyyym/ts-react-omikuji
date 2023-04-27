import { useState } from "react";

const omikujiList = ['大吉', '中吉', '吉', '小吉', '末吉', '凶'] as const;

type OmikujiResult = typeof omikujiList[number];

const [result, setResult] = useState<OmikujiResult | ''>('');
const [isDrawing, setIsDrawing] = useState(false);

function useDrawOmikuji() {
    // drawing中であれば、setTimeoutで一定の回数だけ一定間隔でおみくじ表示関数を呼び出す。
    // おみくじ表示関数
    // drawOmikujiで回数を指定。
    const omikujiResult = (count =0, maxCount=10) => {
        if (count >= maxCount) {
            setIsDrawing(false);
            return;
        }

        setResult(omikujiList[Math.floor(Math.random() * omikujiList.length)]);
        setTimeout(() => omikujiResult(count + 1, maxCount), 200);
    }
    
    return { result, isDrawing, omikujiResult };
};

export default useDrawOmikuji;
