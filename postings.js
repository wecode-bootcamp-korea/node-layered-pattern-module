const sendPosts = (req, res) => {
  res.json({ // 위에서 작성한 sendPosts 함수와 비교했을 때,
  // express 덕분에 JSON.stringify 함수를 사용할 필요없이
  // response 객체의 json 메소드를 활용합니다.
    products: [
      {
        id: 1,
        title: 'node',
        description: 'node.js is awesome',
      },
      {
        id: 2,
        title: 'express',
        description: 'express is a server-side framework for node.js',
      },
    ],
  })
}

const createProduct = (req, res) => {
  const products = [] // 임의의 빈 배열에다가 상품 정보를 저장하겠습니다.
	console.log('request body: ', req.body)
  const { title, description } = req.body
  const product = {
    title : title,
    description : description
  }
  
  products.push(product)

	res.json({ data: products })
}

module.exports = { sendPosts, createProduct } // withoutExpress.js 에서 사용하기 위해 모듈로 내보낸다.