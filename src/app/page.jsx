"use client";
import React from "react";

function MainComponent() {
  const [activeSection, setActiveSection] = React.useState("Profile");
  const [currentWork, setCurrentWork] = React.useState(0);
  const [hoveredCert, setHoveredCert] = React.useState(null);
  const [showModal, setShowModal] = React.useState(false); // YouTube埋め込み用モーダル
  const [modalUrl, setModalUrl] = React.useState(""); // モーダル内の動画URL

  const works = [
    {
      name: "審査資料進捗管理アプリ",
      image:
        "https://ucarecdn.com/d76fe8e5-f8dd-45b2-85f9-cf3c8a15e4be/-/format/auto/",
      description:
        "全登録ユーザのタスク一覧表示およびログインユーザのタスク管理アプリ",
      tech: "使用技術: Spring Boot、MariaDB",
      source: "https://github.com/Kyosuke-Fukui/WebAppSpring/",
      demo: "https://www.youtube.com/embed/vCSULjpUqj8", // 埋め込み形式
    },
    {
      name: "Market Analyzer",
      image:
        "https://ucarecdn.com/64fb1651-9b5b-4f3b-835d-66e6fb21032f/-/format/auto/",
      description:
        "為替データなどのバックテストおよび戦略に用いるパラメータの最適値算出。実際のFXトレードで使用。",
      tech: "使用技術: Javascript、PHP、MYSQL",
      source: "https://github.com/Kyosuke-Fukui/Market-Analyzer-ver1",
      demo: "https://www.youtube.com/embed/RYgiQQWFozg", // 埋め込み形式
    },
    {
      name: "Search Crypto",
      image:
        "https://ucarecdn.com/45b4fdb5-9b99-47dc-9072-8fadbd78f859/-/format/auto/",
      description: "WebAPIから仮想通貨の価格や取引情報を取得",
      tech: "使用言語: React.js",
      source: "https://github.com/Kyosuke-Fukui/Search-crypto-app",
      demo: "https://kyosuke-fukui.github.io/Search-crypto-app/",
    },
  ];

  const certifications = [
    {
      name: "Java SE11 Silver",
      date: "2024年4月 取得",
      image:
        "https://ucarecdn.com/6520a063-01ef-4dea-a3d4-d6be140a255d/-/format/auto/",
    },
    {
      name: "Java SE11 Gold",
      date: "2024年5月 取得",
      image:
        "https://ucarecdn.com/45cbe154-29c3-4b3b-aa56-c6ecd67e7f8e/-/format/auto/",
    },
    {
      name: "基本情報技術者",
      date: "2024年6月 取得",
      image:
        "https://ucarecdn.com/a15793f0-6345-4da6-825e-65b8426a9ef6/-/format/auto/",
    },
    {
      name: "JSTQB Foundation Level",
      date: "2024年6月 取得",
      image:
        "https://ucarecdn.com/cd814710-43de-4a79-9379-acd813ffb565/-/format/auto/",
    },
    {
      name: "生成AIパスポート",
      date: "2024年7月 取得",
      image:
        "https://ucarecdn.com/59077c46-18ff-471b-b7af-b3334ad96cb5/-/format/auto/",
    },
    {
      name: "G検定",
      date: "2024年7月 取得",
      image:
        "https://ucarecdn.com/211d1681-9e83-4dd4-8f7b-b0e5284422d6/-/format/auto/",
    },
    {
      name: "Androidアプリケーション技術者ベーシック",
      date: "2024年8月 取得",
      image:
        "https://ucarecdn.com/4b85cadb-d9dc-4efa-aaeb-1908ffe538b5/-/format/auto/",
    },
  ];

  // // スクロールでセクション切り替え
  // React.useEffect(() => {
  //   const handleScroll = () => {
  //     const sections = ["Profile", "Career", "Skills", "Certifications", "Works"];
  //     const sectionOffsets = sections.map((section) => {
  //       const el = document.getElementById(section);
  //       return el ? el.offsetTop : 0;
  //     });

  //     const scrollPosition = window.scrollY + window.innerHeight / 2; // 中央位置で切り替え
  //     let newActiveSection = activeSection;

  //     for (let i = 0; i < sectionOffsets.length; i++) {
  //       if (scrollPosition >= sectionOffsets[i] && scrollPosition < sectionOffsets[i + 1]) {
  //         newActiveSection = sections[i];
  //         break;
  //       }
  //       if (scrollPosition >= sectionOffsets[sectionOffsets.length - 1]) {
  //         newActiveSection = sections[sections.length - 1];
  //       }
  //     }

  //     if (newActiveSection !== activeSection) {
  //       setActiveSection(newActiveSection);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, [activeSection]);
  // ホバーでセクションを切り替える関数を追加
  const handleSectionHover = (section) => {
    setActiveSection(section);
  };

  // Worksの作品を前後に切り替える
  const handleWorkNavigation = (direction) => {
    if (direction === "prev") {
      setCurrentWork((prev) => (prev === 0 ? works.length - 1 : prev - 1));
    } else {
      setCurrentWork((prev) => (prev === works.length - 1 ? 0 : prev + 1));
    }
  };

  // デモボタンを押したときにモーダルを表示
  const handleDemoClick = (url) => {
    setModalUrl(url);
    setShowModal(true);
  };

  // モーダルを閉じる
  const handleCloseModal = () => {
    setShowModal(false);
    setModalUrl("");
  };

  return (
    <div className="font-playfair bg-gray-100 min-h-screen text-gray-800">
      <header className="bg-[#1a1a1a] text-white p-8 fixed w-full z-10">
        <h1 className="text-6xl font-bold">Portfolio</h1>
      </header>

      <nav className="fixed top-28 left-0 z-10 w-full flex justify-center space-x-4">
        <ul className="flex space-x-8">
          {["Profile", "Career", "Skills", "Certifications", "Works"].map(
            (section) => (
              <li
                key={section}
                className={`cursor-pointer p-3 rounded-lg transition-all duration-300 ${activeSection === section
                  ? "bg-[#1a1a1a] text-white"
                  : "bg-white text-[#1a1a1a] hover:bg-gray-200"
                  }`}
                onClick={() => setActiveSection(section)}
              >
                {section}
              </li>
            )
          )}
        </ul>
      </nav>

      <main className="pt-36 pb-16 px-8 md:px-16 max-w-7xl mx-auto mt-16"> {/* 上部にマージン追加 */}
        {["Profile", "Career", "Skills", "Certifications", "Works"].map(
          (section) => (
            <section
              key={section}
              id={section}
              className={`min-h-screen flex items-center ${activeSection === section ? "opacity-100" : "opacity-0 hidden"
                } transition-opacity duration-500`}
            >
              <div className="w-full">
                <h2 className="text-4xl font-bold mb-8">{section}</h2>

                {/* Profileセクションの内容 */}
                {section === "Profile" && (
                  <p className="text-xl leading-relaxed">
                    証券会社でのマクロツール開発で初めてプログラミングに触れ、為替のトレーダーとして活動していた時期に自動売買プログラムに興味を持ったことをきっかけに
                    本格的にプログラミングの学習に取り組みました。現在はSES企業に就職し、Javaを中心に開発技術を習得しつつ、資格取得によりIT知識を深めているところです。
                  </p>
                )}

                {/* Careerセクションの内容 */}
                {section === "Career" && (
                  <ul className="space-y-8 text-lg">
                    <li>
                      <h3 className="text-2xl font-semibold">2015/4～2020/3</h3>
                      <p>
                        証券会社（投資信託運用会社）にて、法務、国内株式運用、商品企画に従事
                      </p>
                    </li>
                    <li>
                      <h3 className="text-2xl font-semibold">2020/4～2024/3</h3>
                      <p>自己学習期間</p>
                      <ul className="list-disc list-inside ml-4 mt-2">
                        <li>
                          FX専業トレーダーとして活動中にプログラミングを習得し、自身のシステムトレードに活用
                        </li>
                        <li>
                          html、CSS、Javascript、PHPの基礎を学び、為替データの分析ツールや自動売買プログラムを実装
                        </li>
                        <li>
                          Pythonを独学で習得し、機械学習ライブラリを用いて相場分析
                        </li>
                      </ul>
                    </li>
                    <li>
                      <h3 className="text-2xl font-semibold">2024/4～</h3>
                      <p>SES企業のシステム開発部</p>
                      <ul className="list-disc list-inside ml-4 mt-2">
                        <li>研修・待機期間中</li>
                        <li>JavaでのWebアプリ実装</li>
                        <li>Spring BootによるWebアプリ実装</li>
                        <li>
                          7月より、外国為替証拠金取引（FX）システムのプロジェクトにQAエンジニアとしてアサイン。テスト設計・打鍵、テスト自動化業務に従事
                        </li>
                      </ul>
                    </li>
                  </ul>
                )}

                {/* Skillsセクションの内容 */}
                {section === "Skills" && (
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg">
                    <li>
                      <h3 className="text-2xl font-semibold mb-2">言語</h3>
                      <p>html、css、Javascript、PHP、Python、Java、MQL4</p>
                    </li>
                    <li>
                      <h3 className="text-2xl font-semibold mb-2">
                        フレームワーク
                      </h3>
                      <p>React.js、Next.js、Node.js、Laravel、Django、Spring Boot</p>
                    </li>
                    <li>
                      <h3 className="text-2xl font-semibold mb-2">ツール</h3>
                      <p>
                        Git、Github、Gitlab、Eclipse、Visual Studio
                        Code、XAMPP、Virtual Box、Jupyter Notebook
                      </p>
                    </li>
                    <li>
                      <h3 className="text-2xl font-semibold mb-2">その他</h3>
                      <p>SQL、Linux</p>
                    </li>
                  </ul>
                )}

                {/* Certificationsセクションの内容 */}
                {section === "Certifications" && (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {certifications.map((cert, index) => (
                      <div key={index} className="relative group">
                        <img
                          src={cert.image}
                          alt={cert.name}
                          className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
                        />
                        <div
                          className="absolute inset-0 bg-black bg-opacity-75 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-center"
                          onMouseEnter={() => setHoveredCert(cert)}
                          onMouseLeave={() => setHoveredCert(null)}
                        >
                          <p className="font-bold text-lg">{cert.name}</p>
                          <p>{cert.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Worksセクションの内容 */}
                {section === "Works" && (
                  <div className="w-full">
                    <div className="flex justify-between items-center mb-8">
                      {/* 前後の作品を切り替えるボタン */}
                      <button
                        onClick={() => handleWorkNavigation("prev")}
                        className="text-4xl hover:text-gray-600 transition-colors duration-300"
                      >
                        &lt;
                      </button>
                      <div className="text-center max-w-3xl mx-auto">
                        <h3 className="text-3xl font-bold mb-4">
                          {works[currentWork].name}
                        </h3>
                        <img
                          src={works[currentWork].image}
                          alt={works[currentWork].name}
                          className="w-full max-w-2xl mx-auto my-6 rounded-lg shadow-lg"
                        />
                        <p className="text-lg mb-4">
                          {works[currentWork].description}
                        </p>
                        <p className="text-lg mb-4">
                          {works[currentWork].tech}
                        </p>
                        <div className="space-x-4">
                          <a
                            href={works[currentWork].source}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline text-lg"
                          >
                            ソースコード
                          </a>
                          {works[currentWork].demo && (
                            <button
                              onClick={() =>
                                handleDemoClick(works[currentWork].demo)
                              }
                              className="text-blue-600 hover:underline text-lg"
                            >
                              デモ
                            </button>
                          )}
                        </div>
                      </div>
                      <button
                        onClick={() => handleWorkNavigation("next")}
                        className="text-4xl hover:text-gray-600 transition-colors duration-300"
                      >
                        &gt;
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </section>
          )
        )}
      </main>

      {/* YouTubeモーダル */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-20 p-4">
          <div className="relative bg-white p-6 rounded-lg max-w-5xl w-full">
            <iframe
              src={modalUrl}
              title="YouTube video"
              className="w-full h-96 md:h-[36rem]" // 高さをモバイル・デスクトップ対応で調整
              frameBorder="0"
              allowFullScreen
            ></iframe>
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-white bg-black rounded-full p-2"
            >
              &times;
            </button>
          </div>
        </div>
      )}

      {/* <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        section {
          animation: fadeInUp 0.5s ease-out;
        }

        @keyframes subtleHover {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        .group:hover img {
          animation: subtleHover 2s infinite;
        }
      `}</style> */}
    </div>
  );
}

export default MainComponent;
