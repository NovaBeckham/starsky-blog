import * as dayjs from 'dayjs'

export function formatDate(date: string | Date, format = 'YYYY-MM-DD') {
	return dayjs(date).format(format)
}
