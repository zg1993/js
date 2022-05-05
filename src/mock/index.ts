import Mock from 'mockjs';
import user from './user';
import {MockParams} from './typing';

const mocks = [...user];
Mock.setup({
    timeout: '200-600',
});

export function mockXHR(){
    const data: any = Mock.mock({
        'list|1-10': [{
            'id|+1': 1
        }]
    })
    console.log(JSON.stringify(data))
    // console.log(data)
    // console.log('mockXHR')
    let i: MockParams;
    for (i of mocks) {
        Mock.mock(new RegExp(i.url), i.type || 'get', i.response);
    }
}