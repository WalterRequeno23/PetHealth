import { createClient } from '@supabase/supabase-js';
import 'react-native-url-polyfill/auto'; // <--- 1. IMPORTACIÓN CRÍTICA DEL POLYFILL
import AsyncStorage from '@react-native-async-storage/async-storage'; // <--- 2. NECESARIO PARA ALMACENAMIENTO

// DATOS SUPABASE
const SUPABASE_URL = 'https://lfjxirpwvqfgwpwpjgne.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxmanhpcnB3dnFmZ3dwd3BqZ25lIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ4ODMwNDIsImV4cCI6MjA4MDQ1OTA0Mn0.xnXWzd8jhUshxsRBAxT72E6vpZJgwv1rcCjhEXbzm_0';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
    // 3. CONFIGURACIÓN DEL CLIENTE PARA REACT NATIVE
    auth: {
        storage: AsyncStorage, // Especifica dónde guardar la sesión (clave para RN)
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
    },
});