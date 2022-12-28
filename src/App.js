import logo from './logo.svg';
// import './App.css';
import { useEffect } from 'react';
import LocomotiveScroll from "locomotive-scroll";
import './locomtive.css'
function App() {
  let value='0'
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector(".App"),
      smooth: true,
     multiplier:0.4,
     class:'is-reveal'
    
    });
  })
  return (
    <div className="App">
      <div className='scroll' data-scroll-container>
        <div 
        data-scroll-section
        data-scroll-speed={value}
        >
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat sunt magni dolores unde corporis illum veniam dicta nihil optio ut officia eligendi commodi consequuntur soluta consequatur nam facere ratione voluptate laborum iure, dolore odit tenetur minus voluptatem! Quidem deserunt tenetur quo consectetur voluptate beatae cupiditate deleniti dolorum. Architecto deleniti animi quos, totam nemo magni assumenda quibusdam quaerat corrupti, minus eius? Deleniti quos sit fuga maiores minima perferendis necessitatibus, eligendi quas id, beatae sapiente quaerat magni reiciendis aliquam neque ipsa possimus numquam odio fugit, similique accusamus veritatis quasi eaque! Vel quasi, delectus magnam enim explicabo ipsum praesentium officia eum obcaecati error eaque omnis incidunt sequi recusandae exercitationem quas quam dolorum. Eum fuga ratione, eveniet enim maiores voluptatum quis in, id velit, officiis corrupti culpa quam et ullam quasi veniam dolorum nam! Suscipit incidunt eius quasi quae quia harum et repellat ipsa voluptatum, dolor sapiente maiores eveniet esse placeat nemo eligendi illum iusto recusandae debitis aliquam ea vitae numquam. Est ullam accusamus consectetur provident, quas, commodi aut perspiciatis temporibus natus magnam architecto, ut culpa veritatis debitis. Dolorem ipsa nam nostrum dignissimos voluptatibus illum doloremque fugiat obcaecati quas quis iure, quasi facere, libero fugit exercitationem! Architecto quaerat totam earum atque repellat fuga impedit nobis delectus, fugit mollitia, blanditiis, facere harum. Aspernatur amet praesentium consectetur eos non earum. Dolor non repellat dolorum beatae molestiae perferendis exercitationem facilis totam commodi aperiam harum deleniti corporis optio eum voluptates, magnam quisquam magni similique nisi. Debitis maxime aut quia unde tempora consequuntur nisi sunt ullam ipsum necessitatibus dolor corrupti consectetur laboriosam voluptatem, inventore enim sint, perspiciatis laudantium sed dolorum voluptate rerum possimus sit! Vel nesciunt soluta quae incidunt maiores, facilis optio error fugit laudantium similique ratione, doloribus ipsam inventore, quia eos. Eaque accusantium laudantium, odit repellendus eum voluptatum, tempore explicabo ipsum obcaecati fugiat tenetur odio quia quasi reprehenderit!</p>
        </div>

        <div data-scroll-section
        data-scroll-speed={value}
        >
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat sunt magni dolores unde corporis illum veniam dicta nihil optio ut officia eligendi commodi consequuntur soluta consequatur nam facere ratione voluptate laborum iure, dolore odit tenetur minus voluptatem! Quidem deserunt tenetur quo consectetur voluptate beatae cupiditate deleniti dolorum. Architecto deleniti animi quos, totam nemo magni assumenda quibusdam quaerat corrupti, minus eius? Deleniti quos sit fuga maiores minima perferendis necessitatibus, eligendi quas id, beatae sapiente quaerat magni reiciendis aliquam neque ipsa possimus numquam odio fugit, similique accusamus veritatis quasi eaque! Vel quasi, delectus magnam enim explicabo ipsum praesentium officia eum obcaecati error eaque omnis incidunt sequi recusandae exercitationem quas quam dolorum. Eum fuga ratione, eveniet enim maiores voluptatum quis in, id velit, officiis corrupti culpa quam et ullam quasi veniam dolorum nam! Suscipit incidunt eius quasi quae quia harum et repellat ipsa voluptatum, dolor sapiente maiores eveniet esse placeat nemo eligendi illum iusto recusandae debitis aliquam ea vitae numquam. Est ullam accusamus consectetur provident, quas, commodi aut perspiciatis temporibus natus magnam architecto, ut culpa veritatis debitis. Dolorem ipsa nam nostrum dignissimos voluptatibus illum doloremque fugiat obcaecati quas quis iure, quasi facere, libero fugit exercitationem! Architecto quaerat totam earum atque repellat fuga impedit nobis delectus, fugit mollitia, blanditiis, facere harum. Aspernatur amet praesentium consectetur eos non earum. Dolor non repellat dolorum beatae molestiae perferendis exercitationem facilis totam commodi aperiam harum deleniti corporis optio eum voluptates, magnam quisquam magni similique nisi. Debitis maxime aut quia unde tempora consequuntur nisi sunt ullam ipsum necessitatibus dolor corrupti consectetur laboriosam voluptatem, inventore enim sint, perspiciatis laudantium sed dolorum voluptate rerum possimus sit! Vel nesciunt soluta quae incidunt maiores, facilis optio error fugit laudantium similique ratione, doloribus ipsam inventore, quia eos. Eaque accusantium laudantium, odit repellendus eum voluptatum, tempore explicabo ipsum obcaecati fugiat tenetur odio quia quasi reprehenderit!</p>
        </div>

        <div data-scroll-section
        data-scroll-speed={value}
        >
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat sunt magni dolores unde corporis illum veniam dicta nihil optio ut officia eligendi commodi consequuntur soluta consequatur nam facere ratione voluptate laborum iure, dolore odit tenetur minus voluptatem! Quidem deserunt tenetur quo consectetur voluptate beatae cupiditate deleniti dolorum. Architecto deleniti animi quos, totam nemo magni assumenda quibusdam quaerat corrupti, minus eius? Deleniti quos sit fuga maiores minima perferendis necessitatibus, eligendi quas id, beatae sapiente quaerat magni reiciendis aliquam neque ipsa possimus numquam odio fugit, similique accusamus veritatis quasi eaque! Vel quasi, delectus magnam enim explicabo ipsum praesentium officia eum obcaecati error eaque omnis incidunt sequi recusandae exercitationem quas quam dolorum. Eum fuga ratione, eveniet enim maiores voluptatum quis in, id velit, officiis corrupti culpa quam et ullam quasi veniam dolorum nam! Suscipit incidunt eius quasi quae quia harum et repellat ipsa voluptatum, dolor sapiente maiores eveniet esse placeat nemo eligendi illum iusto recusandae debitis aliquam ea vitae numquam. Est ullam accusamus consectetur provident, quas, commodi aut perspiciatis temporibus natus magnam architecto, ut culpa veritatis debitis. Dolorem ipsa nam nostrum dignissimos voluptatibus illum doloremque fugiat obcaecati quas quis iure, quasi facere, libero fugit exercitationem! Architecto quaerat totam earum atque repellat fuga impedit nobis delectus, fugit mollitia, blanditiis, facere harum. Aspernatur amet praesentium consectetur eos non earum. Dolor non repellat dolorum beatae molestiae perferendis exercitationem facilis totam commodi aperiam harum deleniti corporis optio eum voluptates, magnam quisquam magni similique nisi. Debitis maxime aut quia unde tempora consequuntur nisi sunt ullam ipsum necessitatibus dolor corrupti consectetur laboriosam voluptatem, inventore enim sint, perspiciatis laudantium sed dolorum voluptate rerum possimus sit! Vel nesciunt soluta quae incidunt maiores, facilis optio error fugit laudantium similique ratione, doloribus ipsam inventore, quia eos. Eaque accusantium laudantium, odit repellendus eum voluptatum, tempore explicabo ipsum obcaecati fugiat tenetur odio quia quasi reprehenderit!</p>
        </div>
        <div data-scroll-section
        data-scroll-speed={value}
        >
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat sunt magni dolores unde corporis illum veniam dicta nihil optio ut officia eligendi commodi consequuntur soluta consequatur nam facere ratione voluptate laborum iure, dolore odit tenetur minus voluptatem! Quidem deserunt tenetur quo consectetur voluptate beatae cupiditate deleniti dolorum. Architecto deleniti animi quos, totam nemo magni assumenda quibusdam quaerat corrupti, minus eius? Deleniti quos sit fuga maiores minima perferendis necessitatibus, eligendi quas id, beatae sapiente quaerat magni reiciendis aliquam neque ipsa possimus numquam odio fugit, similique accusamus veritatis quasi eaque! Vel quasi, delectus magnam enim explicabo ipsum praesentium officia eum obcaecati error eaque omnis incidunt sequi recusandae exercitationem quas quam dolorum. Eum fuga ratione, eveniet enim maiores voluptatum quis in, id velit, officiis corrupti culpa quam et ullam quasi veniam dolorum nam! Suscipit incidunt eius quasi quae quia harum et repellat ipsa voluptatum, dolor sapiente maiores eveniet esse placeat nemo eligendi illum iusto recusandae debitis aliquam ea vitae numquam. Est ullam accusamus consectetur provident, quas, commodi aut perspiciatis temporibus natus magnam architecto, ut culpa veritatis debitis. Dolorem ipsa nam nostrum dignissimos voluptatibus illum doloremque fugiat obcaecati quas quis iure, quasi facere, libero fugit exercitationem! Architecto quaerat totam earum atque repellat fuga impedit nobis delectus, fugit mollitia, blanditiis, facere harum. Aspernatur amet praesentium consectetur eos non earum. Dolor non repellat dolorum beatae molestiae perferendis exercitationem facilis totam commodi aperiam harum deleniti corporis optio eum voluptates, magnam quisquam magni similique nisi. Debitis maxime aut quia unde tempora consequuntur nisi sunt ullam ipsum necessitatibus dolor corrupti consectetur laboriosam voluptatem, inventore enim sint, perspiciatis laudantium sed dolorum voluptate rerum possimus sit! Vel nesciunt soluta quae incidunt maiores, facilis optio error fugit laudantium similique ratione, doloribus ipsam inventore, quia eos. Eaque accusantium laudantium, odit repellendus eum voluptatum, tempore explicabo ipsum obcaecati fugiat tenetur odio quia quasi reprehenderit!</p>
        </div>
        <div data-scroll-section
        data-scroll-speed={value}
        >
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat sunt magni dolores unde corporis illum veniam dicta nihil optio ut officia eligendi commodi consequuntur soluta consequatur nam facere ratione voluptate laborum iure, dolore odit tenetur minus voluptatem! Quidem deserunt tenetur quo consectetur voluptate beatae cupiditate deleniti dolorum. Architecto deleniti animi quos, totam nemo magni assumenda quibusdam quaerat corrupti, minus eius? Deleniti quos sit fuga maiores minima perferendis necessitatibus, eligendi quas id, beatae sapiente quaerat magni reiciendis aliquam neque ipsa possimus numquam odio fugit, similique accusamus veritatis quasi eaque! Vel quasi, delectus magnam enim explicabo ipsum praesentium officia eum obcaecati error eaque omnis incidunt sequi recusandae exercitationem quas quam dolorum. Eum fuga ratione, eveniet enim maiores voluptatum quis in, id velit, officiis corrupti culpa quam et ullam quasi veniam dolorum nam! Suscipit incidunt eius quasi quae quia harum et repellat ipsa voluptatum, dolor sapiente maiores eveniet esse placeat nemo eligendi illum iusto recusandae debitis aliquam ea vitae numquam. Est ullam accusamus consectetur provident, quas, commodi aut perspiciatis temporibus natus magnam architecto, ut culpa veritatis debitis. Dolorem ipsa nam nostrum dignissimos voluptatibus illum doloremque fugiat obcaecati quas quis iure, quasi facere, libero fugit exercitationem! Architecto quaerat totam earum atque repellat fuga impedit nobis delectus, fugit mollitia, blanditiis, facere harum. Aspernatur amet praesentium consectetur eos non earum. Dolor non repellat dolorum beatae molestiae perferendis exercitationem facilis totam commodi aperiam harum deleniti corporis optio eum voluptates, magnam quisquam magni similique nisi. Debitis maxime aut quia unde tempora consequuntur nisi sunt ullam ipsum necessitatibus dolor corrupti consectetur laboriosam voluptatem, inventore enim sint, perspiciatis laudantium sed dolorum voluptate rerum possimus sit! Vel nesciunt soluta quae incidunt maiores, facilis optio error fugit laudantium similique ratione, doloribus ipsam inventore, quia eos. Eaque accusantium laudantium, odit repellendus eum voluptatum, tempore explicabo ipsum obcaecati fugiat tenetur odio quia quasi reprehenderit!</p>
        </div>
        <div data-scroll-section
        data-scroll-speed={value}
        >
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat sunt magni dolores unde corporis illum veniam dicta nihil optio ut officia eligendi commodi consequuntur soluta consequatur nam facere ratione voluptate laborum iure, dolore odit tenetur minus voluptatem! Quidem deserunt tenetur quo consectetur voluptate beatae cupiditate deleniti dolorum. Architecto deleniti animi quos, totam nemo magni assumenda quibusdam quaerat corrupti, minus eius? Deleniti quos sit fuga maiores minima perferendis necessitatibus, eligendi quas id, beatae sapiente quaerat magni reiciendis aliquam neque ipsa possimus numquam odio fugit, similique accusamus veritatis quasi eaque! Vel quasi, delectus magnam enim explicabo ipsum praesentium officia eum obcaecati error eaque omnis incidunt sequi recusandae exercitationem quas quam dolorum. Eum fuga ratione, eveniet enim maiores voluptatum quis in, id velit, officiis corrupti culpa quam et ullam quasi veniam dolorum nam! Suscipit incidunt eius quasi quae quia harum et repellat ipsa voluptatum, dolor sapiente maiores eveniet esse placeat nemo eligendi illum iusto recusandae debitis aliquam ea vitae numquam. Est ullam accusamus consectetur provident, quas, commodi aut perspiciatis temporibus natus magnam architecto, ut culpa veritatis debitis. Dolorem ipsa nam nostrum dignissimos voluptatibus illum doloremque fugiat obcaecati quas quis iure, quasi facere, libero fugit exercitationem! Architecto quaerat totam earum atque repellat fuga impedit nobis delectus, fugit mollitia, blanditiis, facere harum. Aspernatur amet praesentium consectetur eos non earum. Dolor non repellat dolorum beatae molestiae perferendis exercitationem facilis totam commodi aperiam harum deleniti corporis optio eum voluptates, magnam quisquam magni similique nisi. Debitis maxime aut quia unde tempora consequuntur nisi sunt ullam ipsum necessitatibus dolor corrupti consectetur laboriosam voluptatem, inventore enim sint, perspiciatis laudantium sed dolorum voluptate rerum possimus sit! Vel nesciunt soluta quae incidunt maiores, facilis optio error fugit laudantium similique ratione, doloribus ipsam inventore, quia eos. Eaque accusantium laudantium, odit repellendus eum voluptatum, tempore explicabo ipsum obcaecati fugiat tenetur odio quia quasi reprehenderit!</p>
        </div>
        <div data-scroll-section
        data-scroll-speed={value}
        >
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat sunt magni dolores unde corporis illum veniam dicta nihil optio ut officia eligendi commodi consequuntur soluta consequatur nam facere ratione voluptate laborum iure, dolore odit tenetur minus voluptatem! Quidem deserunt tenetur quo consectetur voluptate beatae cupiditate deleniti dolorum. Architecto deleniti animi quos, totam nemo magni assumenda quibusdam quaerat corrupti, minus eius? Deleniti quos sit fuga maiores minima perferendis necessitatibus, eligendi quas id, beatae sapiente quaerat magni reiciendis aliquam neque ipsa possimus numquam odio fugit, similique accusamus veritatis quasi eaque! Vel quasi, delectus magnam enim explicabo ipsum praesentium officia eum obcaecati error eaque omnis incidunt sequi recusandae exercitationem quas quam dolorum. Eum fuga ratione, eveniet enim maiores voluptatum quis in, id velit, officiis corrupti culpa quam et ullam quasi veniam dolorum nam! Suscipit incidunt eius quasi quae quia harum et repellat ipsa voluptatum, dolor sapiente maiores eveniet esse placeat nemo eligendi illum iusto recusandae debitis aliquam ea vitae numquam. Est ullam accusamus consectetur provident, quas, commodi aut perspiciatis temporibus natus magnam architecto, ut culpa veritatis debitis. Dolorem ipsa nam nostrum dignissimos voluptatibus illum doloremque fugiat obcaecati quas quis iure, quasi facere, libero fugit exercitationem! Architecto quaerat totam earum atque repellat fuga impedit nobis delectus, fugit mollitia, blanditiis, facere harum. Aspernatur amet praesentium consectetur eos non earum. Dolor non repellat dolorum beatae molestiae perferendis exercitationem facilis totam commodi aperiam harum deleniti corporis optio eum voluptates, magnam quisquam magni similique nisi. Debitis maxime aut quia unde tempora consequuntur nisi sunt ullam ipsum necessitatibus dolor corrupti consectetur laboriosam voluptatem, inventore enim sint, perspiciatis laudantium sed dolorum voluptate rerum possimus sit! Vel nesciunt soluta quae incidunt maiores, facilis optio error fugit laudantium similique ratione, doloribus ipsam inventore, quia eos. Eaque accusantium laudantium, odit repellendus eum voluptatum, tempore explicabo ipsum obcaecati fugiat tenetur odio quia quasi reprehenderit!</p>
        </div>
        <div data-scroll-section
        data-scroll-speed={value}
        >
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat sunt magni dolores unde corporis illum veniam dicta nihil optio ut officia eligendi commodi consequuntur soluta consequatur nam facere ratione voluptate laborum iure, dolore odit tenetur minus voluptatem! Quidem deserunt tenetur quo consectetur voluptate beatae cupiditate deleniti dolorum. Architecto deleniti animi quos, totam nemo magni assumenda quibusdam quaerat corrupti, minus eius? Deleniti quos sit fuga maiores minima perferendis necessitatibus, eligendi quas id, beatae sapiente quaerat magni reiciendis aliquam neque ipsa possimus numquam odio fugit, similique accusamus veritatis quasi eaque! Vel quasi, delectus magnam enim explicabo ipsum praesentium officia eum obcaecati error eaque omnis incidunt sequi recusandae exercitationem quas quam dolorum. Eum fuga ratione, eveniet enim maiores voluptatum quis in, id velit, officiis corrupti culpa quam et ullam quasi veniam dolorum nam! Suscipit incidunt eius quasi quae quia harum et repellat ipsa voluptatum, dolor sapiente maiores eveniet esse placeat nemo eligendi illum iusto recusandae debitis aliquam ea vitae numquam. Est ullam accusamus consectetur provident, quas, commodi aut perspiciatis temporibus natus magnam architecto, ut culpa veritatis debitis. Dolorem ipsa nam nostrum dignissimos voluptatibus illum doloremque fugiat obcaecati quas quis iure, quasi facere, libero fugit exercitationem! Architecto quaerat totam earum atque repellat fuga impedit nobis delectus, fugit mollitia, blanditiis, facere harum. Aspernatur amet praesentium consectetur eos non earum. Dolor non repellat dolorum beatae molestiae perferendis exercitationem facilis totam commodi aperiam harum deleniti corporis optio eum voluptates, magnam quisquam magni similique nisi. Debitis maxime aut quia unde tempora consequuntur nisi sunt ullam ipsum necessitatibus dolor corrupti consectetur laboriosam voluptatem, inventore enim sint, perspiciatis laudantium sed dolorum voluptate rerum possimus sit! Vel nesciunt soluta quae incidunt maiores, facilis optio error fugit laudantium similique ratione, doloribus ipsam inventore, quia eos. Eaque accusantium laudantium, odit repellendus eum voluptatum, tempore explicabo ipsum obcaecati fugiat tenetur odio quia quasi reprehenderit!</p>
        </div>
        <div data-scroll-section
        data-scroll-speed={value}
        >
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat sunt magni dolores unde corporis illum veniam dicta nihil optio ut officia eligendi commodi consequuntur soluta consequatur nam facere ratione voluptate laborum iure, dolore odit tenetur minus voluptatem! Quidem deserunt tenetur quo consectetur voluptate beatae cupiditate deleniti dolorum. Architecto deleniti animi quos, totam nemo magni assumenda quibusdam quaerat corrupti, minus eius? Deleniti quos sit fuga maiores minima perferendis necessitatibus, eligendi quas id, beatae sapiente quaerat magni reiciendis aliquam neque ipsa possimus numquam odio fugit, similique accusamus veritatis quasi eaque! Vel quasi, delectus magnam enim explicabo ipsum praesentium officia eum obcaecati error eaque omnis incidunt sequi recusandae exercitationem quas quam dolorum. Eum fuga ratione, eveniet enim maiores voluptatum quis in, id velit, officiis corrupti culpa quam et ullam quasi veniam dolorum nam! Suscipit incidunt eius quasi quae quia harum et repellat ipsa voluptatum, dolor sapiente maiores eveniet esse placeat nemo eligendi illum iusto recusandae debitis aliquam ea vitae numquam. Est ullam accusamus consectetur provident, quas, commodi aut perspiciatis temporibus natus magnam architecto, ut culpa veritatis debitis. Dolorem ipsa nam nostrum dignissimos voluptatibus illum doloremque fugiat obcaecati quas quis iure, quasi facere, libero fugit exercitationem! Architecto quaerat totam earum atque repellat fuga impedit nobis delectus, fugit mollitia, blanditiis, facere harum. Aspernatur amet praesentium consectetur eos non earum. Dolor non repellat dolorum beatae molestiae perferendis exercitationem facilis totam commodi aperiam harum deleniti corporis optio eum voluptates, magnam quisquam magni similique nisi. Debitis maxime aut quia unde tempora consequuntur nisi sunt ullam ipsum necessitatibus dolor corrupti consectetur laboriosam voluptatem, inventore enim sint, perspiciatis laudantium sed dolorum voluptate rerum possimus sit! Vel nesciunt soluta quae incidunt maiores, facilis optio error fugit laudantium similique ratione, doloribus ipsam inventore, quia eos. Eaque accusantium laudantium, odit repellendus eum voluptatum, tempore explicabo ipsum obcaecati fugiat tenetur odio quia quasi reprehenderit!</p>
        </div>
        <div data-scroll-section
        data-scroll-speed={value}
        >
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat sunt magni dolores unde corporis illum veniam dicta nihil optio ut officia eligendi commodi consequuntur soluta consequatur nam facere ratione voluptate laborum iure, dolore odit tenetur minus voluptatem! Quidem deserunt tenetur quo consectetur voluptate beatae cupiditate deleniti dolorum. Architecto deleniti animi quos, totam nemo magni assumenda quibusdam quaerat corrupti, minus eius? Deleniti quos sit fuga maiores minima perferendis necessitatibus, eligendi quas id, beatae sapiente quaerat magni reiciendis aliquam neque ipsa possimus numquam odio fugit, similique accusamus veritatis quasi eaque! Vel quasi, delectus magnam enim explicabo ipsum praesentium officia eum obcaecati error eaque omnis incidunt sequi recusandae exercitationem quas quam dolorum. Eum fuga ratione, eveniet enim maiores voluptatum quis in, id velit, officiis corrupti culpa quam et ullam quasi veniam dolorum nam! Suscipit incidunt eius quasi quae quia harum et repellat ipsa voluptatum, dolor sapiente maiores eveniet esse placeat nemo eligendi illum iusto recusandae debitis aliquam ea vitae numquam. Est ullam accusamus consectetur provident, quas, commodi aut perspiciatis temporibus natus magnam architecto, ut culpa veritatis debitis. Dolorem ipsa nam nostrum dignissimos voluptatibus illum doloremque fugiat obcaecati quas quis iure, quasi facere, libero fugit exercitationem! Architecto quaerat totam earum atque repellat fuga impedit nobis delectus, fugit mollitia, blanditiis, facere harum. Aspernatur amet praesentium consectetur eos non earum. Dolor non repellat dolorum beatae molestiae perferendis exercitationem facilis totam commodi aperiam harum deleniti corporis optio eum voluptates, magnam quisquam magni similique nisi. Debitis maxime aut quia unde tempora consequuntur nisi sunt ullam ipsum necessitatibus dolor corrupti consectetur laboriosam voluptatem, inventore enim sint, perspiciatis laudantium sed dolorum voluptate rerum possimus sit! Vel nesciunt soluta quae incidunt maiores, facilis optio error fugit laudantium similique ratione, doloribus ipsam inventore, quia eos. Eaque accusantium laudantium, odit repellendus eum voluptatum, tempore explicabo ipsum obcaecati fugiat tenetur odio quia quasi reprehenderit!</p>
        </div>
        <div data-scroll-section
        data-scroll-speed={value}
        >
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat sunt magni dolores unde corporis illum veniam dicta nihil optio ut officia eligendi commodi consequuntur soluta consequatur nam facere ratione voluptate laborum iure, dolore odit tenetur minus voluptatem! Quidem deserunt tenetur quo consectetur voluptate beatae cupiditate deleniti dolorum. Architecto deleniti animi quos, totam nemo magni assumenda quibusdam quaerat corrupti, minus eius? Deleniti quos sit fuga maiores minima perferendis necessitatibus, eligendi quas id, beatae sapiente quaerat magni reiciendis aliquam neque ipsa possimus numquam odio fugit, similique accusamus veritatis quasi eaque! Vel quasi, delectus magnam enim explicabo ipsum praesentium officia eum obcaecati error eaque omnis incidunt sequi recusandae exercitationem quas quam dolorum. Eum fuga ratione, eveniet enim maiores voluptatum quis in, id velit, officiis corrupti culpa quam et ullam quasi veniam dolorum nam! Suscipit incidunt eius quasi quae quia harum et repellat ipsa voluptatum, dolor sapiente maiores eveniet esse placeat nemo eligendi illum iusto recusandae debitis aliquam ea vitae numquam. Est ullam accusamus consectetur provident, quas, commodi aut perspiciatis temporibus natus magnam architecto, ut culpa veritatis debitis. Dolorem ipsa nam nostrum dignissimos voluptatibus illum doloremque fugiat obcaecati quas quis iure, quasi facere, libero fugit exercitationem! Architecto quaerat totam earum atque repellat fuga impedit nobis delectus, fugit mollitia, blanditiis, facere harum. Aspernatur amet praesentium consectetur eos non earum. Dolor non repellat dolorum beatae molestiae perferendis exercitationem facilis totam commodi aperiam harum deleniti corporis optio eum voluptates, magnam quisquam magni similique nisi. Debitis maxime aut quia unde tempora consequuntur nisi sunt ullam ipsum necessitatibus dolor corrupti consectetur laboriosam voluptatem, inventore enim sint, perspiciatis laudantium sed dolorum voluptate rerum possimus sit! Vel nesciunt soluta quae incidunt maiores, facilis optio error fugit laudantium similique ratione, doloribus ipsam inventore, quia eos. Eaque accusantium laudantium, odit repellendus eum voluptatum, tempore explicabo ipsum obcaecati fugiat tenetur odio quia quasi reprehenderit!</p>
        </div>
        <div data-scroll-section
        data-scroll-speed={value}
        >
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat sunt magni dolores unde corporis illum veniam dicta nihil optio ut officia eligendi commodi consequuntur soluta consequatur nam facere ratione voluptate laborum iure, dolore odit tenetur minus voluptatem! Quidem deserunt tenetur quo consectetur voluptate beatae cupiditate deleniti dolorum. Architecto deleniti animi quos, totam nemo magni assumenda quibusdam quaerat corrupti, minus eius? Deleniti quos sit fuga maiores minima perferendis necessitatibus, eligendi quas id, beatae sapiente quaerat magni reiciendis aliquam neque ipsa possimus numquam odio fugit, similique accusamus veritatis quasi eaque! Vel quasi, delectus magnam enim explicabo ipsum praesentium officia eum obcaecati error eaque omnis incidunt sequi recusandae exercitationem quas quam dolorum. Eum fuga ratione, eveniet enim maiores voluptatum quis in, id velit, officiis corrupti culpa quam et ullam quasi veniam dolorum nam! Suscipit incidunt eius quasi quae quia harum et repellat ipsa voluptatum, dolor sapiente maiores eveniet esse placeat nemo eligendi illum iusto recusandae debitis aliquam ea vitae numquam. Est ullam accusamus consectetur provident, quas, commodi aut perspiciatis temporibus natus magnam architecto, ut culpa veritatis debitis. Dolorem ipsa nam nostrum dignissimos voluptatibus illum doloremque fugiat obcaecati quas quis iure, quasi facere, libero fugit exercitationem! Architecto quaerat totam earum atque repellat fuga impedit nobis delectus, fugit mollitia, blanditiis, facere harum. Aspernatur amet praesentium consectetur eos non earum. Dolor non repellat dolorum beatae molestiae perferendis exercitationem facilis totam commodi aperiam harum deleniti corporis optio eum voluptates, magnam quisquam magni similique nisi. Debitis maxime aut quia unde tempora consequuntur nisi sunt ullam ipsum necessitatibus dolor corrupti consectetur laboriosam voluptatem, inventore enim sint, perspiciatis laudantium sed dolorum voluptate rerum possimus sit! Vel nesciunt soluta quae incidunt maiores, facilis optio error fugit laudantium similique ratione, doloribus ipsam inventore, quia eos. Eaque accusantium laudantium, odit repellendus eum voluptatum, tempore explicabo ipsum obcaecati fugiat tenetur odio quia quasi reprehenderit!</p>
        </div>
        <div data-scroll-section
        data-scroll-speed={value}
        >
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat sunt magni dolores unde corporis illum veniam dicta nihil optio ut officia eligendi commodi consequuntur soluta consequatur nam facere ratione voluptate laborum iure, dolore odit tenetur minus voluptatem! Quidem deserunt tenetur quo consectetur voluptate beatae cupiditate deleniti dolorum. Architecto deleniti animi quos, totam nemo magni assumenda quibusdam quaerat corrupti, minus eius? Deleniti quos sit fuga maiores minima perferendis necessitatibus, eligendi quas id, beatae sapiente quaerat magni reiciendis aliquam neque ipsa possimus numquam odio fugit, similique accusamus veritatis quasi eaque! Vel quasi, delectus magnam enim explicabo ipsum praesentium officia eum obcaecati error eaque omnis incidunt sequi recusandae exercitationem quas quam dolorum. Eum fuga ratione, eveniet enim maiores voluptatum quis in, id velit, officiis corrupti culpa quam et ullam quasi veniam dolorum nam! Suscipit incidunt eius quasi quae quia harum et repellat ipsa voluptatum, dolor sapiente maiores eveniet esse placeat nemo eligendi illum iusto recusandae debitis aliquam ea vitae numquam. Est ullam accusamus consectetur provident, quas, commodi aut perspiciatis temporibus natus magnam architecto, ut culpa veritatis debitis. Dolorem ipsa nam nostrum dignissimos voluptatibus illum doloremque fugiat obcaecati quas quis iure, quasi facere, libero fugit exercitationem! Architecto quaerat totam earum atque repellat fuga impedit nobis delectus, fugit mollitia, blanditiis, facere harum. Aspernatur amet praesentium consectetur eos non earum. Dolor non repellat dolorum beatae molestiae perferendis exercitationem facilis totam commodi aperiam harum deleniti corporis optio eum voluptates, magnam quisquam magni similique nisi. Debitis maxime aut quia unde tempora consequuntur nisi sunt ullam ipsum necessitatibus dolor corrupti consectetur laboriosam voluptatem, inventore enim sint, perspiciatis laudantium sed dolorum voluptate rerum possimus sit! Vel nesciunt soluta quae incidunt maiores, facilis optio error fugit laudantium similique ratione, doloribus ipsam inventore, quia eos. Eaque accusantium laudantium, odit repellendus eum voluptatum, tempore explicabo ipsum obcaecati fugiat tenetur odio quia quasi reprehenderit!</p>
        </div>
        <div data-scroll-section
        data-scroll-speed={value}
        >
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat sunt magni dolores unde corporis illum veniam dicta nihil optio ut officia eligendi commodi consequuntur soluta consequatur nam facere ratione voluptate laborum iure, dolore odit tenetur minus voluptatem! Quidem deserunt tenetur quo consectetur voluptate beatae cupiditate deleniti dolorum. Architecto deleniti animi quos, totam nemo magni assumenda quibusdam quaerat corrupti, minus eius? Deleniti quos sit fuga maiores minima perferendis necessitatibus, eligendi quas id, beatae sapiente quaerat magni reiciendis aliquam neque ipsa possimus numquam odio fugit, similique accusamus veritatis quasi eaque! Vel quasi, delectus magnam enim explicabo ipsum praesentium officia eum obcaecati error eaque omnis incidunt sequi recusandae exercitationem quas quam dolorum. Eum fuga ratione, eveniet enim maiores voluptatum quis in, id velit, officiis corrupti culpa quam et ullam quasi veniam dolorum nam! Suscipit incidunt eius quasi quae quia harum et repellat ipsa voluptatum, dolor sapiente maiores eveniet esse placeat nemo eligendi illum iusto recusandae debitis aliquam ea vitae numquam. Est ullam accusamus consectetur provident, quas, commodi aut perspiciatis temporibus natus magnam architecto, ut culpa veritatis debitis. Dolorem ipsa nam nostrum dignissimos voluptatibus illum doloremque fugiat obcaecati quas quis iure, quasi facere, libero fugit exercitationem! Architecto quaerat totam earum atque repellat fuga impedit nobis delectus, fugit mollitia, blanditiis, facere harum. Aspernatur amet praesentium consectetur eos non earum. Dolor non repellat dolorum beatae molestiae perferendis exercitationem facilis totam commodi aperiam harum deleniti corporis optio eum voluptates, magnam quisquam magni similique nisi. Debitis maxime aut quia unde tempora consequuntur nisi sunt ullam ipsum necessitatibus dolor corrupti consectetur laboriosam voluptatem, inventore enim sint, perspiciatis laudantium sed dolorum voluptate rerum possimus sit! Vel nesciunt soluta quae incidunt maiores, facilis optio error fugit laudantium similique ratione, doloribus ipsam inventore, quia eos. Eaque accusantium laudantium, odit repellendus eum voluptatum, tempore explicabo ipsum obcaecati fugiat tenetur odio quia quasi reprehenderit!</p>
        </div>
        <div data-scroll-section
        data-scroll-speed={value}
        >
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat sunt magni dolores unde corporis illum veniam dicta nihil optio ut officia eligendi commodi consequuntur soluta consequatur nam facere ratione voluptate laborum iure, dolore odit tenetur minus voluptatem! Quidem deserunt tenetur quo consectetur voluptate beatae cupiditate deleniti dolorum. Architecto deleniti animi quos, totam nemo magni assumenda quibusdam quaerat corrupti, minus eius? Deleniti quos sit fuga maiores minima perferendis necessitatibus, eligendi quas id, beatae sapiente quaerat magni reiciendis aliquam neque ipsa possimus numquam odio fugit, similique accusamus veritatis quasi eaque! Vel quasi, delectus magnam enim explicabo ipsum praesentium officia eum obcaecati error eaque omnis incidunt sequi recusandae exercitationem quas quam dolorum. Eum fuga ratione, eveniet enim maiores voluptatum quis in, id velit, officiis corrupti culpa quam et ullam quasi veniam dolorum nam! Suscipit incidunt eius quasi quae quia harum et repellat ipsa voluptatum, dolor sapiente maiores eveniet esse placeat nemo eligendi illum iusto recusandae debitis aliquam ea vitae numquam. Est ullam accusamus consectetur provident, quas, commodi aut perspiciatis temporibus natus magnam architecto, ut culpa veritatis debitis. Dolorem ipsa nam nostrum dignissimos voluptatibus illum doloremque fugiat obcaecati quas quis iure, quasi facere, libero fugit exercitationem! Architecto quaerat totam earum atque repellat fuga impedit nobis delectus, fugit mollitia, blanditiis, facere harum. Aspernatur amet praesentium consectetur eos non earum. Dolor non repellat dolorum beatae molestiae perferendis exercitationem facilis totam commodi aperiam harum deleniti corporis optio eum voluptates, magnam quisquam magni similique nisi. Debitis maxime aut quia unde tempora consequuntur nisi sunt ullam ipsum necessitatibus dolor corrupti consectetur laboriosam voluptatem, inventore enim sint, perspiciatis laudantium sed dolorum voluptate rerum possimus sit! Vel nesciunt soluta quae incidunt maiores, facilis optio error fugit laudantium similique ratione, doloribus ipsam inventore, quia eos. Eaque accusantium laudantium, odit repellendus eum voluptatum, tempore explicabo ipsum obcaecati fugiat tenetur odio quia quasi reprehenderit!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
