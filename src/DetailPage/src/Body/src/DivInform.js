import { useEffect, useState } from 'react';

// 배당정보: 한주당 배당금 배당락 기준일 배당 지급일
const DivInform = () => {
  /*
      로그인한지 안한지 체크
      userId로 확인
  */
  const [userId, setUserId] = useState();
  const getProfile = async () => {
    try {
      // Kakao SDK API를 이용해 사용자 정보 획득
      let data = await window.Kakao.API.request({
        url: '/v2/user/me',
      });
      // 사용자 정보 변수에 저장
      setUserId(data.id);
      console.log(data);
      // setNickName(data.properties.nickname);
      // setProfileImage(data.properties.profile_image);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  useEffect(() => {
    if (userId) {
      console.log('userId: ', userId);
      // alert('success login', userId);
    }
  }, [userId]);

  return (
    <>
      {!userId ? (
        <div>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='card mb-4'>
                  <div className='card-header'>
                    <i className='fas fa-chart-area me-1'></i>
                    배당 정보
                  </div>
                  <div className='card-body'>
                    <h3>주당 배당금 : </h3>
                    <h3>배당금 지급 기준일 : </h3>
                    <h3>배당 지급일 : </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-12'>
                <div className='card mb-4'>
                  <div className='card-header'>
                    <i className='fas fa-chart-area me-1'></i>
                    배당 정보
                  </div>
                  <div className='card-body'>
                    <h3>주당 배당금 : 주식배당정보_stckGenrDvdnAmt</h3>
                    <h3>배당금 지급 기준일 : 주식배당정보_dvdnBasDt</h3>
                    <h3>배당 지급일 : 주식배당정보_cashDvdnPayDt</h3>
                    <p>
                      다음배당금은 얼마일까? - 로그인하면 아코디언
                      디자인(+설명)과 예상배당금 알고리즘 추가
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default DivInform;
