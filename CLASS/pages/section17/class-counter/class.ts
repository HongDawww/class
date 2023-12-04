// class Date {
//   qqq = 3;
//   getFullYear() {}
//   getMonth() {}
// }

// const date = new Date();
// console.log(date.getFullYear());
// console.log(date.getMonth() + 1);

class Monster {
  power = 50;
  attack() {
    console.log("공격!!");
  }
}

Monster;

// 상속
class superMonster extends Monster {
  run() {
    console.log("도망!!");
  }
  attack(): void {
    console.log("필살기!!?!?!");
    // 오버라이딩 - 덮어쓰기
  }
}

superMonster;

const monster = new Monster();
monster.power;
monster.attack(); //공격

const myMonster = new superMonster();
myMonster.attack(); // 필살기
