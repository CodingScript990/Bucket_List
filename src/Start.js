// 리액트 패키지를 불러옵니다.
import React from 'react'; 

// 함수형 컴포넌트는 이렇게 쓸 수도 있고
// function Bucketlist(props){
//     return (
//         <div>버킷 리스트</div>
//     );
// }

// 이렇게 쓸 수도 있어요. =>가 들어간 함수를 화살표 함수라고 불러요.
// 저희는 앞으로 화살표 함수를 사용할거예요.
// 앗 () 안에 props! 부모 컴포넌트에게 받아온 데이터입니다.
// js 함수가 값을 받아오는 것과 똑같이 받아오네요.
const BucketList = (props) => {
    
    // Quiz 1: my_list에 ['a', 'b', 'c'] 대신 부모 컴포넌트가 넘겨준 값을 넣으려면 어떻게 해야할까요?
    const my_lists = props.list;

    console.log(props);
    // 컴포넌트가 뿌려줄 ui 요소(리엑트 엘리먼트라고 불러요.)를 반환해줍니다.
    return (
        <div className="text">
            {
                // js의 내장 함수 중 하나인 map입니다. 리스트의 갯수만큼 => 오른쪽 구문을 반복해요. 
                // 자세한 사용법은 아래 링크를 확인해주세요.
                // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
                my_lists.map((list) => {
                    // 콘솔을 확인해봅시다 :)
                    console.log(list);
                    return (
                    <div className="texts">
                        <img className="image" src="https://lh3.googleusercontent.com/proxy/GYWdMNGD1ujhiO7r7wvw1VimAhGyXRkrcibK3pxBA3pbhSMH2DgjmpizoHBCx7deqPbse9ODRiIdQ6ehmrC6sUaIVfrcqDpidfY31RLsBS_TnxFs4g" />
                        <p className="text">
                            나는 <span className="name">{list}</span> 에 대해서<br/>
                            얼마나 알고 있을까?
                        </p>
                        <input type="text" className="input-box" placeholder="내 이름"/> <br/>
                        <button type="button" className="btn-box">시작하기</button>
                    </div>
                    );
                })
            }
        </div>
    );
}

// 우리가 만든 함수형 컴포넌트를 export 해줍니다.
// export 해주면 다른 컴포넌트에서 BucketList 컴포넌트를 불러다 쓸 수 있어요.
export default BucketList;