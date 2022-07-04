var snowflakes = {
  particles: {
    // 점 모양 설정
    number: {
      value: 100,  // 점 갯수
      dendity: {
        enable: true,  // 점 밀집도 변경 여부
        value_area: 200   // 밀집도
      }

    },
    shape: {
      type: "circle",  // 점 모양 
      // circle:원, edge:사각, triangle:삼각, polygon:다각형, star:별형, image:이미지
      stroke: {
        width: 0, // 외곽선 굵기(선 없음)
        color: "#ffcc00"
      },
      // type을 polygon으로 했을 때 설정
      polygon: {
        nb_sides: 5 // 꼭지점 수
      },
      // type을 이미지로 했을 때 설정
      image: {
        src: "images/flower.png",
        width: 100,
        height: 100
      }
    },
    color: {
      value: "#f18b1e" // 점 색상
    },
    opacity: {
      value: 0.8,  // 투명도
      random: true, // 투명도 랜덤하게 여부
      anim: {
        enable: false, // 투명성을 애니메이션시키느냐
        speed: 20, //애니메이션의 속도
        opacity_min: 0.3, //투명도의 최소치
        sync: false //모든 점을 동시에 애니메이션시키느냐
      }
    },
    size: {
      value: 10, // 점 크기          
      random: true, // 점 크기 랜덤 여부
      anim: { // 크기 애니메이션 화 설정
        enable: false,
        speed: 10,
        opacity_min: 0.1,
        sync: false
      }
    },
    // 점의 연결선 설정
    line_linked: {
      enable: false,  // 선 표시 여부
      distance: 150,   //선을 잇는 셰이프의 간격
      color: "#ffffff", //선 색
      opacity: 0.4, //선의 투명도
      width: 1 //선의 굵기
    },
    // 움직임 설정
    move: {
      enable: true, // 움직임 여부
      speed: 5,  // 속도
      direction: "bottom",  // 움직임 방향 (none, top, top-right, right, bottom-right, bottom, bottom-left, left, top-left)
      straight: false, // 개별 모양의 움직임 멈춤 여부
      out_mode: "out"  // 영역 밖에 나온 점 움직임(out, bounce)
    }
  },
  // 인터렉티브 설정
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: false, // 마우스 오버가 유효한지 여부
        mode: "repulse"  // 마우스 오버시 반응 움직임(grab, repulse, bubble)
      },
      onclick: {
        enable: true, // 마우스 오버가 유효한지 여부
        mode: "push"
      }
    },
    // 움직임 설정
    modes: {
      grab: { // 커서와 점사이 선이 표시됨
        distance: 400, //커서의 반응 거리
        line_linked: {
          opacity: 1 //선의 투명도
        }
      },
      repulse: { // 점이 커서를 피해 퍼짐
        distance: 200 //커서의 반응 거리
      },
      bubble: { // 점이 커짐
        "distance": 400, //커서의 반응 거리
        "size": 40, // 커지는 크기
        "opacity": 8, // 늘어날 셰이프의 투명도
        "duration": 2, // 늘어날 셰이프의 지속 시간(onclick시만)
        "speed": 3 // 늘어날 셰이프의 속도(onclick시만)
      },
      push: { // 점 갯수가 늘어남
        particles_nb: 12 // 늘어날 점 갯수
      },
      remove: { // 점 갯수가 줄어듬
        particles_nb: 2 // 줄어들 점 갯수
      },
    },
    retina_detect: true,  //레티나 디스플레이에 대응
    resize: true // canvas 크기 변경 여부
  }
};

// particlesJS(DOM ID, path-json, callback(optional));
particlesJS("snow", snowflakes);