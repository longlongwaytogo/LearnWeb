//src/js/index.js
import 'normalize.css';
 
import Rx from 'rx';
import {
 	getRepos,
	getuser
	} from './helper';
import {
	reposTemplate,
	userTemplate
	} from './templates';
import '../css/base.css';



const showUserInfo = ($dom, data) => {
  $dom.html(userTemplate(data));
};

const userInfoSteam = ($repos) => {
  const $avator = $repos.find('.user_header');
  const avatorMouseoverObservable = Rx.Observable.fromEvent($avator, 'mouseover')
    .debounce(500)
    // 只有当满足下列条件的流才能继续执行，否则中断
    .takeWhile((e)=>{
        //异步获取的用户信息被新建到 DOM 里，该 DOM 最外层是 infos_container
      // 因此，如果已经有了 infos_container，则可以认为我们已经异步获取过数据了，此时 takeWhile 将返回 false，流将会中断
      const $infosWrapper = $(e.target).parent().find('.user_infos_wrapper');
      return $infosWrapper.find('.infos_container').length === 0;
    })
    .map((e)=> {
        const $infosWrapper = $(e.target).parent().find('.user_infos_wrapper');
        return {
        conatiner: $infosWrapper,
            url:$(e.target).attr('data-api')
        }
    })
    .filter((data)=>!!data.url)
    // getuser 来异步获取用户信息
    .flatMapLatest(getUser)
    .do((result) => {
      // 将用户信息组建成为 DOM 元素，并插入到页面中。在这之后，
      // 该用户对应的 DOM 里就会拥有 infos_container 这个 div，
      // 所以 takeWhile 会返回 false。也就是说，之后再 hover 上去，
      // 流也不会被触发了
      const {data, conatiner} = result; 
      showUserInfo(conatiner, data);

    });
 // 但我们不再需要 subscribe 它，而是返回这个 Observable
  return avatorMouseoverObservable;
    // avatorMouseover.subscribe((result) => {
    //     console.log('fetch user info succeed');
    // }, (err) => {
    //   console.log(err);
    // }, () => {
    //   console.log('completed');
    // });

};


$(()=>{
   
    // $conatiner 是装载搜索结果的容器 div
    const $conatiner = $('.content_container');
    const $input =$('.search');
    // 通过input的keyup事件创建流
    const observable = Rx.Observable.fromEvent($input,'keyup')
        .debounce(400)
        // 并获取每次keyup时搜索框的值，筛选出合法的值
        .map(()=>$input.val().trim())
        .filter((text)=>!!text)
        //只取不一样的值进行异步
        .distinctUntilChanged()
        // 利用do可以做一些不影响流的事件，比如这里打印input的值
        .do((value)=> console.log(value))
        // 调用getRepos方法将返回一个Observable
        // // flatMap 则将所有Observable合并，转为一个Observable
        // .flatMap(getRePos);
        // 仅处理最后一次的异步
        .flatMapLatest(getRepos)
        // 首先把之前的搜索结果清空
        .do((results) => $conatiner.html(''))
        // 利用 Rx.Observable.from 将异步的结果转化为 Observable，并通过 flatMap 合并到原有的流中。此时流中的每个元素是 results 中的每个 item
        .flatMap((results) => Rx.Observable.from(results))
        // 将各 item 转化为 jQuery 对象
         .map((repos) => $(reposTemplate(repos)))
        // 最后把每个 jQuery 对象依次加到容器里
        .do(($repos) => {
         $conatiner.append($repos);
         })
    .flatMap(($repos) => {
      return userInfoSteam($repos);
        });


        // 第一个回调中的data代表异步的返回值
        observable.subscribe(()=>{
            console.log('success');
        },(err)=>{
            console.log(err);
        },()=>{
    console.log('completed');
        });

         
        
});