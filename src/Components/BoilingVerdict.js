export default function BoilingVersict({ celcius = 0 }) {
  if (celcius >= 100) {
    return <p>The would Boild</p>
  }
  return <p>Water would not Boild</p>
}