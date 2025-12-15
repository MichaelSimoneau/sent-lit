import React from 'react';
import { View, Text, TouchableOpacity, Share, Platform, Linking } from 'react-native';
import { Svg, Path } from 'react-native-svg';

interface SocialShareProps {
  url: string;
  title: string;
  description?: string;
}

export function SocialShare({ url, title, description }: SocialShareProps) {
  const handleNativeShare = async () => {
    try {
      await Share.share({
        message: `${title} - ${description}\n${url}`,
        url: url, // iOS only
        title: title, // Android only
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleWebShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          text: description,
          url,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      // Fallback for browsers without Web Share API
      handleNativeShare();
    }
  };

  const openUrl = (shareUrl: string) => {
    if (Platform.OS === 'web') {
      window.open(shareUrl, '_blank');
    } else {
      Linking.openURL(shareUrl);
    }
  };

  return (
    <View className="flex-row gap-4 mt-6">
      <Text className="text-sm font-bold text-slate-500 uppercase tracking-wider self-center mr-2">Share:</Text>
      
      {/* Twitter / X */}
      <TouchableOpacity 
        onPress={() => openUrl(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`)}
        className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
      >
        <Svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-slate-900 dark:text-white">
          <Path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </Svg>
      </TouchableOpacity>

      {/* Facebook */}
      <TouchableOpacity 
        onPress={() => openUrl(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`)}
        className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
      >
        <Svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-slate-900 dark:text-white">
          <Path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v2.225l-.333.006c-2.769.026-3.07 1.189-3.07 2.813v2.217h4.197l-.496 3.667h-3.701v7.98h-5.068Z" />
        </Svg>
      </TouchableOpacity>

      {/* LinkedIn */}
      <TouchableOpacity 
        onPress={() => openUrl(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`)}
        className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
      >
        <Svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-slate-900 dark:text-white">
          <Path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </Svg>
      </TouchableOpacity>

      {/* Copy Link */}
      <TouchableOpacity 
        onPress={() => {
          // Clipboard logic would go here
          alert('Link copied to clipboard!');
        }}
        className="w-10 h-10 bg-slate-100 dark:bg-slate-800 rounded-full items-center justify-center hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
      >
        <Svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-900 dark:text-white">
          <Path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
          <Path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
        </Svg>
      </TouchableOpacity>
    </View>
  );
}
