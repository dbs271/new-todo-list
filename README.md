## PropTypes 종류

- array: 배열
- arrayOf(다른 PropType): 특정 PropType으로 이루어진 배열을 의미. 예를 들어 arrayOf(PropTypes.number)는 숫자로 이루어진 배열
- bool: true 혹은 false
- func: 함수
- number: 숫자
- object: 객체
- string: 문자열
- symbol: ES6의 Symbol
- node: 렌더링 할 수 있는 모든 것(숫자, 문자열, 혹은 JSX 코드. children도 node PropType이다.)
- instanceOf(클래스): 특정 클래스의 인스턴스 (예: instanceOf(MyClass))
- oneOf(['dog', 'cat']): 주어진 배열 요소 중 값 하나
- oneOfType([React.PropTypes.string, PropTypes.number]): 주어진 배열 안의 종류 중 하나
- objectOf(React.PropTypes.number): 객체의 모든 키 값이 인자로 주어진 PropType인 객체
- shape({name: PropTypes.string, num: PropTypes.number}): 주어진 스키마를 가진 객체
- any: 아무 종류

---

# 함수형 컴포넌트에서 useState 사용

## 배열 비구조화 할당

배열 비구조화 할당은 배열 안에 들어 있는 값을 쉽게 추출할 수 있도록 해주는 문법

```js
const array = [1, 2];
const one = array[0];
const two = array[1];
```

위 코드를 배열 비구조화 할당을 사용하면 아래와 같이 표현할 수 있다.

```js
const array = [1, 2];
const [one, two] = array;
```

## useState 사용하기

```js
import { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("Hi");
  const onClickLeave = () => setMessage("Bye");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
};

export default Say;
```

useState 함수의 인자에는 상태의 초기값을 넣어준다. 값의 형태는 자유. 숫자, 문자열, 객체, 배열 등
함수를 호출하면 배열이 반환되는데 배열의 첫 번째 원소는 현재 상태이고, 두 번째 원소는 상태를 바꿔주는 함수다. 이 함수를 세터(Setter) 함수라고 부름. 그리고 배열 비구조화 할당을 통해 이름을 자유롭게 정해 줄 수 있다. 현재 message와 setMessage라고 이름을 설정했는데, text와 setText라고 이름을 자유롭게 해도 상관없음

## 한 컴포넌트에서 useState 여러 번 사용하기

```js
import { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("Hi");
  const onClickLeave = () => setMessage("Bye");

  const [color, setColor] = useState("black");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: "red" }} onClick={() => setColor("red")}>
        red
      </button>
      <button style={{ color: "green" }} onClick={() => setColor("green")}>
        green
      </button>
      <button style={{ color: "blue" }} onClick={() => setColor("blue")}>
        blue
      </button>
    </div>
  );
};

export default Say;
```

## state를 사용할 때 주의 사항

state 값을 바꿔야 할 때는 setState 혹은 useState를 통해 전달받은 세터 함수를 사용해야 한다.

잘못된 예)

```js
const [obj, setObj] = useState({ a: 1, b: 1 });
obj.b = 2;
```

배열이나 객체를 업데이트해야 할 때는?
배열이나 객체의 사본을 만들고 그 사본에 값을 업데이트한 후, 그 사본의 상태를 setState 혹은 세터 함수를 통해 업데이트한다.

```js
// 객체
const obj = { a: 1, b: 2, c: 3 };
const nextObj = { ...obj, b: 2 }; // 사본을 만들어서 b 값만 덮어쓰기

// 배열
const array = [
  { id: 1, value: true },
  { id: 2, value: true },
  { id: 3, value: false },
];

let nextArr = array.concat({ id: 4 }); // 새 항목 추가
nextArr.filter((item) => item.id !== 2); // id가 2인 항목 제거
nextArr.map((item) => (item.id === 1 ? { ...item, value: false } : item));
// id가 1인 항목의 value를 false로 설정
```

객체에 대한 사본을 만들 때는 spread 연산자(...) 을 사용해 처리하고, 배열에 대한 사본을 만들 때는 배열의 내장 함수들을 활용한다.

---

## 이벤트 핸들링

### 이벤트를 사용할 때 주의 사항

1. 이벤트 이름은 카멜 표기법으로 작성

   예를 들어 HTML의 onclick은 리액트에서는 onClick으로 작성해야 됨.

2. 이벤트에 실행할 자바스크립트 코드를 전달하는 것이 아니라, 함수 형태의 값을 전달한다.

   HTML에서 이벤트를 설정할 때는 큰 따옴표 안에 실행할 코드를 넣었지만, 리액트에서는 함수 형태의 객체를 전달한다.

3. DOM 요소에만 이벤트를 설저할 수 있다.

   div, button, input, form, span 등의 DOM 요소에는 이벤트를 설정할 수 있지만, 직접 만든 컴포넌트에는 이벤트를 자체적으로 설정할 수 없다.

### 이벤트 종류

- Clipboard
- Composition
- Keyboard
- Focus
- Form
- Mouse
- Selection
- Touch
- UI
- Wheel
- Media
- Image
- Animation
- Transition

```jsx
const { useState } = require("react");

const EventPractice = () => {
  const [form, setForm] = useState({
    username: "",
    message: "",
  });
  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ": " + message);
    setForm({
      username: "",
      message: "",
    });
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      onClick();
    }
  };
  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무키나 누르세요"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPractice;
```

---

## ref: DOM에 이름 달기

리액트 컴포넌트 안에서는 id를 사용하면 안되는 걸까?

> 리액트 컴포넌트 안에서는 id를 사용하면 안될까?  
> 리액트 컴포넌트 안에서도 id를 사용할 수는 있다. JSX 안에서 DOM에 id를 달면 해당 DOM을 렌더링 할때 그대로 전달된다. 하지만 특수한 경우가 아니면 사용을 권장하지 않음.

ref는 **DOM을 꼭 직접적으로 건드려야 할 때** 에만 사용한다.

### DOM을 꼭 사용해야 하는 상황

- 특정 input에 포커스 주기
- 스크롤 박스 조작하기
- Canvas 요소에 그림 그리기 등
