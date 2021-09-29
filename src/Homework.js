import React from 'react'; 

const Homework = (props) => {
    
    
    const my_lists = props.list;

    console.log(props);
    
    return (
        <div className="text">
            {
                my_lists.map((list) => {
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

export default Homework;