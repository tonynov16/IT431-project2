import { useState } from 'react';
import type { Album } from '../types';

interface Props {
  product: Album | null;
  onSave: (data: Partial<Album>) => void;
  onCancel: () => void;
}

export default function ProductForm({ product, onSave, onCancel }: Props) {
  // TODO: Add one useState per field in your Product type. When editing, seed
  // each state value from `product` so the form is pre-populated.
  //
  const [title, setTitle] = useState(product?.title ?? '');
  const [artist, setArtist] = useState(product?.artist ?? '');
  const [genre, setGenre] = useState(product?.genre ?? '');
  const [release_year, setReleaseYear] = useState(product?.release_year ?? '');
  const [track_count, setTrackCount] = useState(product?.track_count ?? '');
  const [label, setLabel] = useState(product?.label ?? '');

  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    // TODO: Validate required fields, then call onSave with them.
    if (!title.trim()) {
      setError('Title is required');
      return;
    }

    if (!artist.trim()) {
      setError('Artist is required');
      return;
    }

    if (!genre.trim()) {
      setError('Genre is required');
      return;
    }
    // onSave({ title, rating, ... });
    onSave({
      title,
      artist,
      genre,
      release_year: release_year ? Number(release_year) : null,
      track_count: track_count ? Number(track_count) : null,
      label: label?.trim() || null
    });
  }

  return (
    <div>
      <h2>{product ? 'Edit Item' : 'Add New Item'}</h2>
      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit} style={{ maxWidth: 520 }}>
        {/* TODO: Add one labeled <input> per field. */}

            <label>
              Title
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </label>

            <label>
              Artist
              <input
                type='text'
                value={artist}
                onChange={(e) => setArtist(e.target.value)}
                required
                />
            </label>

            <label>
              Genre
              <input 
                type='text'
                value={genre}
                onChange={(e) => setGenre(e.target.value)}
                required
                />
            </label>

            <label>
              Release Year 
                <input
                  type='number'
                  value={release_year}
                  onChange={(e) => setReleaseYear(e.target.value)}
                  />
            </label>

            <label>
              Track Count 
                <input
                  type='number'
                  value={track_count}
                  onChange={(e) => setTrackCount(e.target.value)}
                  />
            </label>

            <label>
              Music Label
              <input 
                type='text'
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                required
                />
            </label>

        <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
          <button className="primary" type="submit">
            {product ? 'Save Changes' : 'Add Item'}
          </button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
