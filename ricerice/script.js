const menuList = [
    { name: '비빔밥', category: 'rice', price: 6, diet: 'all', calories: 600, spiceLevel: 'mild' },
    { name: '김치찌개', category: 'spicy', price: 5, diet: 'all', calories: 500, spiceLevel: 'spicy' },
    { name: '떡볶이', category: 'spicy', price: 3, diet: 'all', calories: 400, spiceLevel: 'medium' },
    { name: '순두부찌개', category: 'rice', price: 5, diet: 'all', calories: 550, spiceLevel: 'mild' },
    { name: '불고기', category: 'meat', price: 8, diet: 'meat', calories: 700, spiceLevel: 'medium' },
    { name: '피자', category: 'rice', price: 10, diet: 'all', calories: 900, spiceLevel: 'mild' },
    { name: '햄버거', category: 'light', price: 4, diet: 'meat', calories: 450, spiceLevel: 'mild' },
    { name: '초밥', category: 'light', price: 12, diet: 'all', calories: 300, spiceLevel: 'mild' },
    { name: '삼겹살', category: 'meat', price: 15, diet: 'meat', calories: 800, spiceLevel: 'medium' },
    { name: '김밥', category: 'rice', price: 5, diet: 'all', calories: 400, spiceLevel: 'mild' },
    { name: '라멘', category: 'noodles', price: 7, diet: 'all', calories: 650, spiceLevel: 'medium' },
    { name: '국밥', category: 'rice', price: 6, diet: 'all', calories: 600, spiceLevel: 'mild' },
    { name: '쌀국수', category: 'noodles', price: 6, diet: 'all', calories: 500, spiceLevel: 'mild' },
    { name: '돈까스', category: 'rice', price: 8, diet: 'meat', calories: 700, spiceLevel: 'mild' },
    { name: '볶음밥', category: 'rice', price: 5, diet: 'all', calories: 600, spiceLevel: 'mild' }
];

let recentRecommendations = [];

document.getElementById('recommendButton').addEventListener('click', function() {

    const category = document.getElementById('category').value;
    const budget = parseInt(document.getElementById('budget').value) || Infinity;
    const diet = document.getElementById('diet').value;
    const spiceLevel = document.getElementById('spiceLevel').value;
    const caloriesLimit = parseInt(document.getElementById('calories').value) || Infinity;

    let filteredMenu = menuList.filter(item => {
        const isCategoryMatch = category === 'all' || item.category === category;
        const isBudgetMatch = item.price <= budget;
        const isDietMatch = diet === 'all' || item.diet === diet;
        const isSpiceMatch = spiceLevel === 'all' || item.spiceLevel === spiceLevel;
        const isCaloriesMatch = item.calories <= caloriesLimit;
        return isCategoryMatch && isBudgetMatch && isDietMatch && isSpiceMatch && isCaloriesMatch;
    });

    if (filteredMenu.length > 0) {
        const randomIndex = Math.floor(Math.random() * filteredMenu.length);
        const selectedMenu = filteredMenu[randomIndex];

        document.getElementById('menu-card').classList.add('show');
        document.getElementById('menuName').textContent = selectedMenu.name;
        document.getElementById('menuPrice').textContent = `가격: ${selectedMenu.price}천 원`;
        document.getElementById('menuCalories').textContent = `칼로리: ${selectedMenu.calories}kcal`;

        recentRecommendations.push(selectedMenu.name);
        if (recentRecommendations.length > 5) {
            recentRecommendations.shift();
        }

        const recentList = document.getElementById('recentList');
        recentList.innerHTML = '';
        recentRecommendations.forEach(menu => {
            const listItem = document.createElement('li');
            listItem.textContent = menu;
            recentList.appendChild(listItem);
        });
    } else {
        document.getElementById('menu-card').classList.remove('show');
        alert('조건에 맞는 메뉴가 없습니다. 다시 설정해 주세요!');
    }
});
