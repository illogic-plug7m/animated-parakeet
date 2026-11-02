:root {
  --bg: #101828;
  --panel: #1f2937;
  --display: #111827;
  --button: #e5e7eb;
  --button-secondary: #9ca3af;
  --operator: #f59e0b;
  --equals: #22c55e;
  --text: #f9fafb;
  --shadow: rgba(0, 0, 0, 0.2);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #0f172a, #111827 45%, #1f2937);
  font-family: Arial, Helvetica, sans-serif;
}

.calculator {
  width: min(92vw, 360px);
  background: var(--panel);
  border-radius: 22px;
  padding: 20px;
  box-shadow: 0 20px 45px var(--shadow);
}

.display {
  min-height: 78px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 18px 16px;
  margin-bottom: 18px;
  background: var(--display);
  border-radius: 14px;
  color: var(--text);
  font-size: clamp(2rem, 5vw, 2.8rem);
  font-weight: 700;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: break-all;
}

.buttons {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}

.btn {
  border: none;
  border-radius: 14px;
  min-height: 62px;
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  background: var(--button);
  cursor: pointer;
  transition: transform 0.12s ease, filter 0.15s ease;
}

.btn:hover {
  filter: brightness(0.96);
}

.btn:active {
  transform: translateY(1px) scale(0.99);
}

.btn-secondary {
  background: var(--button-secondary);
  color: white;
}

.btn-operator {
  background: var(--operator);
  color: white;
}

.btn-equals {
  background: var(--equals);
  color: white;
}

.btn-zero {
  grid-column: span 2;
}
