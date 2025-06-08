import { 
  BarChart, Bar, AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip,  ResponsiveContainer 
} from 'recharts';

import { useTheme } from "../context/ThemeContext";

const Analytics = () => {
  const { isDark } = useTheme();
  
  return (
    <div className="space-y-6">
      <h3 className={`text-lg font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>Analytics Dashboard</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-sm border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
          <h4 className={`text-md font-medium mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Monthly Revenue</h4>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={[]}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#374151' : '#e5e7eb'} />
              <XAxis stroke={isDark ? '#9ca3af' : '#6b7280'} />
              <YAxis stroke={isDark ? '#9ca3af' : '#6b7280'} />
              <Tooltip contentStyle={{ backgroundColor: isDark ? '#1f2937' : '#fff', border: isDark ? '1px solid #374151' : '1px solid #e5e7eb' }} />
              <Bar dataKey="value" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
          <p className={`text-center text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} mt-4`}>No revenue data available</p>
        </div>
        
        <div className={`${isDark ? 'bg-gray-800' : 'bg-white'} p-6 rounded-lg shadow-sm border ${isDark ? 'border-gray-700' : 'border-gray-200'}`}>
          <h4 className={`text-md font-medium mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>User Growth</h4>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={[]}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#374151' : '#e5e7eb'} />
              <XAxis stroke={isDark ? '#9ca3af' : '#6b7280'} />
              <YAxis stroke={isDark ? '#9ca3af' : '#6b7280'} />
              <Tooltip contentStyle={{ backgroundColor: isDark ? '#1f2937' : '#fff', border: isDark ? '1px solid #374151' : '1px solid #e5e7eb' }} />
              <Area type="monotone" dataKey="users" stroke="#10b981" fill="#10b981" fillOpacity={0.6} />
            </AreaChart>
          </ResponsiveContainer>
          <p className={`text-center text-sm ${isDark ? 'text-gray-400' : 'text-gray-500'} mt-4`}>No user growth data available</p>
        </div>
      </div>
    </div>
  );
};

export default Analytics;