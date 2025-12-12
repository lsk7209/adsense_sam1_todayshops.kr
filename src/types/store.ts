export interface StoreIndex {
  id: string; // UUID
  original_id: string;
  name: string;
  category_large: string;
  category_middle: string;
  region: string;
  address: string;
  lat?: number | null;
  lng?: number | null;
  created_at: string;
}

export interface StoreDetail {
  id: string; // UUID (FK to StoreIndex)
  description?: string | null;
  faq?: FaqItem[] | null; // JSONB structure
  original_data?: any | null; // JSONB
  content_generated: boolean;
  updated_at: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

// Composite type for frontend usage
export interface Store extends StoreIndex {
  details?: StoreDetail;
}
