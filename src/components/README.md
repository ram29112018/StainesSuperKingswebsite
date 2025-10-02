# PlayerStatsCard Component

A React component for displaying cricket player statistics.

## Props

| Prop | Type | Required | Description |
|------|------|----------|-------------|
| name | string | Yes | The player's name |
| runs | number | Yes | Total runs scored by the player |
| wickets | number | Yes | Total wickets taken by the player |

## Usage

```jsx
import { PlayerStatsCard } from './components';

function App() {
  return (
    <PlayerStatsCard 
      name="Virat Kohli" 
      runs={12345} 
      wickets={4} 
    />
  );
}
```

## Example

See `PlayerStatsCard.example.jsx` for a complete usage example.

## Styling

The component includes default styling in `PlayerStatsCard.css`. You can customize the appearance by overriding the following CSS classes:

- `.player-stats-card` - Main card container
- `.player-name` - Player name heading
- `.player-stats` - Stats container
- `.stat-item` - Individual stat row
- `.stat-label` - Stat label (e.g., "Runs:", "Wickets:")
- `.stat-value` - Stat value (the numbers)
