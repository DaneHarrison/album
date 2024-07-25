import { TOTAL_NUM_LATS, TOTAL_NUM_LONGS } from "../../types"

const NUM_LATS = 360
const NUM_LONGS = 180

export function calcGroupSize(
    currZoom: number,
    minZoom: number,
    maxZoom: number,
    minNumGroups: number,
    maxNumGroups: number,
    coordLimit: TOTAL_NUM_LATS | TOTAL_NUM_LONGS,
) {
    const scalingDiff = Math.abs(maxNumGroups - minNumGroups)
    const possibleZoomLvls = Math.abs(maxZoom - minZoom) * zoomLvlScaler
    const linearIncrements = Math.abs(Math.ceil(scalingDiff / possibleZoomLvls))
    const singleGroupSize = minNumGroups + (linearIncrements * (currZoom - 1))
    const groupSize = coordLimit / singleGroupSize

    return groupSize
}