import moment from 'moment';
const picture: string[] = ['.jpg', '.jpeg', '.png'];
const video: string[] = ['.mp4'];
const doc: string[] = [];

export function urlHandler(url: string) {
  if (url.length < 24) return url;
  else return url.substring(0, url.indexOf('/', 23) + 1) + '...';
}

export function noticeDateHandler(record: any) {
  // console.log(record);
  let endTime: any = record.noticeEndDate ? `-${moment(record.noticeBeginDate).format('YYYY.MM.DD')}` : '';
  //console.log(`${moment(record.noticeBeginDate).format('YYYY.MM.DD')}${endTime}`);
  return `${moment(record.noticeBeginDate).format('YYYY.MM.DD')}${endTime}`;
}

// 将annexIds转换为defaultFileList格式
export function fileNameHandler(annexIds: string, annexNames: string): object[] {
  console.log(annexIds);
  console.log(annexNames);
  let res: object[] = [];
  // let annexNames = record.annexNames;
  if (annexNames) {
    let annexIdsList: string[] = annexIds.split(',');
    (annexNames as string).split(',').forEach((item, index) => {
      let type = item.split('.').pop();
      res.push({
        uid: annexIdsList[index],
        name: item,
        type: type,
        // url: '',
      });
    });
  }
  console.log(res);
  return res;
}

export function contentHandler(text: string) {
  if (text.length < 15) return text;
  else return text.substring(0, 14) + '...';
}

export function nameHandler(text: string) {
  if (text.length < 15) return text;
  else return text.substring(0, 7) + '...';
}
