import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          1.회원가입<br></br>
          <label for="id">아이디: </label>
          <input type="text" name="id" id="id" required></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

          <label for="phonenum">전화번호: </label>
          <input type="text" name="phonenum" id="phonenum" required></input><br></br>
          
          <label for="password">비밀번호: </label>
          <input type="text" name="password" id="password" required></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

          <label for="email">이메일: </label>
          <input type="email" name="email" id="email" required></input><br></br>

          <label for="name">이름: </label>
          <input type="text" name="name" id="name" required></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

          <input type="button"value="확인"></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="button"value="취소"></input><br></br><br></br><br></br>
          <hr class="one"></hr>

          2. 회원 조회 및 수정<br></br>
          <label>조회할 아이디: </label>
          <input type="text" name="id" id="id" required></input>
          <input type="button"value="검색"></input><br></br><br></br>

          아이디&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;이름&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;전화번호&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;이메일
          <br></br><br></br>
          <hr class="one"></hr>

          3. 새 글 작성<br></br>
          아이디<input type="text" name="id" id="id" required></input><br></br>
          글제목<input type="text" name="id" id="id" required></input><br></br><br></br>
          내용<input type="text" placeholder="입력하세요!" id="contents"></input><br></br>
          <input type="button"value="확인"></input>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <input type="button"value="취소"></input><br></br><br></br><br></br>

          <hr class="one"></hr>

          4. 사용자별 게시글 확인<br></br><br></br>
          <label>조회할 글쓴이의 아이디를 입력: </label><input type="text" name="id" id="id" required></input><input type="button"value="검색"></input><br></br><br></br>
          아이디&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;글쓴이&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;제목&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;내용
          <br></br><br></br>
          <hr class="one"></hr>

          5. 게시글 조회 및 수정<br></br><br></br>
          <label>조회할 게시글의 번호를 입력: </label><input type="text" name="id" id="id" required></input><input type="button"value="검색"></input><br></br><br></br>
          아이디&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;글쓴이&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;제목&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;내용
          <br></br><br></br>
          <hr class="one"></hr>

          6. 회원목록<br></br>
          <input type="button"value="회원 목록 전체 검색"></input><br></br>
          아이디&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;이름&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;전화번호&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;이메일
          <br></br>
          <hr class="one"></hr>

          7. 게시글 목록<br></br>
          <input type="button"value="게시글 전체 검색"></input><br></br>
          아이디&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;글쓴이&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;제목&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;내용
          <br></br>
          <hr class="one"></hr>
        </p>
        
      </header>
    </div>
  );
}

export default App;
