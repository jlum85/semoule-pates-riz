import React from "react";

const App: React.FC = () => {
  return (
    <div className="box app">
      <h1 className="box title">Semoule - Pâtes - Riz</h1>
      <div className="counter">
        <p className="counter--label">Nombre de personnes</p>
        <div
          className="counter--buttons"
          style={{
            backgroundImage:
              "linear-gradient(326deg, rgb(164, 80, 139) 0%, rgb(95, 10, 135) 74%)"
          }}
        >
          <button>
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-minus-square"
            >
              <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
              <line x1={8} y1={12} x2={16} y2={12} />
            </svg>
          </button>
          <span>2 Personnes</span>
          <button>
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-plus-square"
            >
              <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
              <line x1={12} y1={8} x2={12} y2={16} />
              <line x1={8} y1={12} x2={16} y2={12} />
            </svg>
          </button>
        </div>
      </div>
      <div className="counter">
        <p className="counter--label">Stock pour</p>
        <div
          className="counter--buttons"
          style={{
            backgroundImage:
              "linear-gradient(315deg, rgb(231, 144, 135) 0%, rgb(134, 120, 95) 74%)"
          }}
        >
          <button>
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-minus-square"
            >
              <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
              <line x1={8} y1={12} x2={16} y2={12} />
            </svg>
          </button>
          <span>2 Semaines</span>
          <button>
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-plus-square"
            >
              <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
              <line x1={12} y1={8} x2={12} y2={16} />
              <line x1={8} y1={12} x2={16} y2={12} />
            </svg>
          </button>
        </div>
      </div>
      <div className="counter">
        <p className="counter--label">Portion de pâtes</p>
        <div
          className="counter--buttons"
          style={{
            backgroundImage:
              "linear-gradient(115deg, rgb(31, 209, 249) 0%, rgb(182, 33, 254) 74%)"
          }}
        >
          <button>
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-minus-square"
            >
              <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
              <line x1={8} y1={12} x2={16} y2={12} />
            </svg>
          </button>
          <span>70 Grammes</span>
          <button>
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-plus-square"
            >
              <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
              <line x1={12} y1={8} x2={12} y2={16} />
              <line x1={8} y1={12} x2={16} y2={12} />
            </svg>
          </button>
        </div>
      </div>
      <div className="counter">
        <p className="counter--label">Portion de riz</p>
        <div
          className="counter--buttons"
          style={{
            backgroundImage:
              "linear-gradient(115deg, rgb(10, 188, 249) 0%, rgb(44, 105, 209) 74%)"
          }}
        >
          <button>
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-minus-square"
            >
              <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
              <line x1={8} y1={12} x2={16} y2={12} />
            </svg>
          </button>
          <span>60 Grammes</span>
          <button>
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-plus-square"
            >
              <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
              <line x1={12} y1={8} x2={12} y2={16} />
              <line x1={8} y1={12} x2={16} y2={12} />
            </svg>
          </button>
        </div>
      </div>
      <div className="counter">
        <p className="counter--label">Portion de semoule</p>
        <div
          className="counter--buttons"
          style={{
            backgroundImage:
              "linear-gradient(115deg, rgb(177, 191, 216) 0%, rgb(103, 130, 180) 74%)"
          }}
        >
          <button>
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-minus-square"
            >
              <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
              <line x1={8} y1={12} x2={16} y2={12} />
            </svg>
          </button>
          <span>80 Grammes</span>
          <button>
            <svg
              width={24}
              height={24}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-plus-square"
            >
              <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
              <line x1={12} y1={8} x2={12} y2={16} />
              <line x1={8} y1={12} x2={16} y2={12} />
            </svg>
          </button>
        </div>
      </div>
      <div className="menu">
        <p className="menu--label">Menu de la semaine</p>
        <div className="menu--block">
          <div className="menu--line">
            <p className="menu--day">lundi</p>
            <div className="menu--selects">
              <div className="menu--meal">
                <p>Midi</p>
                <select>
                  <option value="pates">Pates</option>
                  <option value="riz">Riz</option>
                  <option value="semoule">Semoule</option>
                </select>
              </div>
              <div className="menu--meal">
                <p>Soir</p>
                <select>
                  <option value="pates">Pâtes</option>
                  <option value="riz">Riz</option>
                  <option value="semoule">Semoule</option>
                </select>
              </div>
            </div>
          </div>
          <div className="menu--line">
            <p className="menu--day">mardi</p>
            <div className="menu--selects">
              <div className="menu--meal">
                <p>Midi</p>
                <select>
                  <option value="pates">Pates</option>
                  <option value="riz">Riz</option>
                  <option value="semoule">Semoule</option>
                </select>
              </div>
              <div className="menu--meal">
                <p>Soir</p>
                <select>
                  <option value="pates">Pâtes</option>
                  <option value="riz">Riz</option>
                  <option value="semoule">Semoule</option>
                </select>
              </div>
            </div>
          </div>
          <div className="menu--line">
            <p className="menu--day">mercredi</p>
            <div className="menu--selects">
              <div className="menu--meal">
                <p>Midi</p>
                <select>
                  <option value="pates">Pates</option>
                  <option value="riz">Riz</option>
                  <option value="semoule">Semoule</option>
                </select>
              </div>
              <div className="menu--meal">
                <p>Soir</p>
                <select>
                  <option value="pates">Pâtes</option>
                  <option value="riz">Riz</option>
                  <option value="semoule">Semoule</option>
                </select>
              </div>
            </div>
          </div>
          <div className="menu--line">
            <p className="menu--day">jeudi</p>
            <div className="menu--selects">
              <div className="menu--meal">
                <p>Midi</p>
                <select>
                  <option value="pates">Pates</option>
                  <option value="riz">Riz</option>
                  <option value="semoule">Semoule</option>
                </select>
              </div>
              <div className="menu--meal">
                <p>Soir</p>
                <select>
                  <option value="pates">Pâtes</option>
                  <option value="riz">Riz</option>
                  <option value="semoule">Semoule</option>
                </select>
              </div>
            </div>
          </div>
          <div className="menu--line">
            <p className="menu--day">vendredi</p>
            <div className="menu--selects">
              <div className="menu--meal">
                <p>Midi</p>
                <select>
                  <option value="pates">Pates</option>
                  <option value="riz">Riz</option>
                  <option value="semoule">Semoule</option>
                </select>
              </div>
              <div className="menu--meal">
                <p>Soir</p>
                <select>
                  <option value="pates">Pâtes</option>
                  <option value="riz">Riz</option>
                  <option value="semoule">Semoule</option>
                </select>
              </div>
            </div>
          </div>
          <div className="menu--line">
            <p className="menu--day">samedi</p>
            <div className="menu--selects">
              <div className="menu--meal">
                <p>Midi</p>
                <select>
                  <option value="pates">Pates</option>
                  <option value="riz">Riz</option>
                  <option value="semoule">Semoule</option>
                </select>
              </div>
              <div className="menu--meal">
                <p>Soir</p>
                <select>
                  <option value="pates">Pâtes</option>
                  <option value="riz">Riz</option>
                  <option value="semoule">Semoule</option>
                </select>
              </div>
            </div>
          </div>
          <div className="menu--line">
            <p className="menu--day">dimanche</p>
            <div className="menu--selects">
              <div className="menu--meal">
                <p>Midi</p>
                <select>
                  <option value="pates">Pates</option>
                  <option value="riz">Riz</option>
                  <option value="semoule">Semoule</option>
                </select>
              </div>
              <div className="menu--meal">
                <p>Soir</p>
                <select>
                  <option value="pates">Pâtes</option>
                  <option value="riz">Riz</option>
                  <option value="semoule">Semoule</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="needs">
        <p className="needs--label">Il vous faut</p>
        <div
          className="need"
          style={{
            backgroundImage:
              "linear-gradient(315deg, rgb(31, 209, 249) 0%, rgb(182, 33, 254) 74%)"
          }}
        >
          <h2>1.4kg de pâtes</h2>
          <p>Soit 3 paquets de 500g</p>
        </div>
        <div
          className="need"
          style={{
            backgroundImage:
              "linear-gradient(315deg, rgb(10, 188, 249) 0%, rgb(44, 105, 209) 74%)"
          }}
        >
          <h2>1.2kg de riz</h2>
          <p>Soit 3 paquets de 500g</p>
        </div>
        <div
          className="need"
          style={{
            backgroundImage:
              "linear-gradient(315deg, rgb(177, 191, 216) 0%, rgb(103, 130, 180) 74%)"
          }}
        >
          <h2>1.28kg de semoule</h2>
          <p>Soit 3 paquets de 500g</p>
        </div>
      </div>
    </div>
  );
};

export default App;
