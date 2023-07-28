import { getCoordinate } from '../../../store/courier/actionCreators';
import { useAppDispatch } from '../../../store';
import { flagCoord, getsS, getse } from '../../../hooks/IsLoggedIn';

export const useTakeCoordinate = (trackNumber: string) => {
	const dispatch = useAppDispatch();
	const flag = flagCoord();

	if (!flag) {
		setInterval(() => {
			dispatch(getCoordinate({ trackNumber }));
		}, 10000);
	}
	const e = getse();
	const s = getsS();
	return { e, s };
};
