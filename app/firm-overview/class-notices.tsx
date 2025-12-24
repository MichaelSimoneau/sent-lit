import { View, Text, ScrollView, StyleSheet, Platform, useWindowDimensions } from 'react-native';
import { Stack } from 'expo-router';
import { Container } from '../../src/components/Container';
import { Navigation } from '../../src/components/Navigation';
import { Footer } from '../../src/components/Footer';
import { Card } from '../../src/components/Card';
import { SEOHead } from '../../src/components/SEOHead';

const CLASS_NOTICES = [
  {
    id: '1',
    title: 'Credit Reporting Agency Settlement',
    description: 'Notice of proposed settlement in class action regarding credit reporting errors',
    deadline: '2024-03-15',
    status: 'Active',
    link: '#',
  },
  {
    id: '2',
    title: 'Auto Lender Class Action',
    description: 'Notice of class action lawsuit regarding deceptive auto financing practices',
    deadline: '2024-04-01',
    status: 'Pending',
    link: '#',
  },
];

export default function ClassNotices() {
  const { width } = useWindowDimensions();
  const isMobile = width < 768;
  const isDesktop = width >= 1024;

  return (
    <>
      <SEOHead 
        title="Class Notices | Sentinel Litigation"
        description="View active and pending class action notices and settlement information from Sentinel Litigation cases."
      />
      <Stack.Screen options={{ title: 'Class Notices' }} />
      <View style={styles.pageContainer}>
        <Navigation />
        <ScrollView>
          <Container style={[styles.container, isDesktop && styles.containerDesktop]}>
            <Text style={[
              styles.title,
              isMobile && styles.titleMobile,
              isDesktop && styles.titleDesktop
            ]}>
              Class Notices
            </Text>
            <Text style={[
              styles.subtitle,
              isMobile && styles.subtitleMobile
            ]}>
              Active and pending class action notices and settlement information
            </Text>

            <View style={styles.noticesSection}>
              {CLASS_NOTICES.length > 0 ? (
                CLASS_NOTICES.map((notice) => (
                  <Card key={notice.id} style={styles.noticeCard}>
                    <View style={styles.noticeHeader}>
                      <Text style={styles.noticeStatus}>{notice.status}</Text>
                      <Text style={styles.noticeDeadline}>
                        Deadline: {new Date(notice.deadline).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </Text>
                    </View>
                    <Text style={styles.noticeTitle}>{notice.title}</Text>
                    <Text style={styles.noticeDescription}>{notice.description}</Text>
                    <View style={styles.noticeFooter}>
                      <Text style={styles.importantText}>
                        <Text style={styles.bold}>Important:</Text> If you believe you may be a class member, please review the full notice and take any required action before the deadline.
                      </Text>
                    </View>
                  </Card>
                ))
              ) : (
                <View style={styles.emptyState}>
                  <Text style={styles.emptyTitle}>No Active Class Notices</Text>
                  <Text style={styles.emptyText}>
                    There are currently no active class action notices. Check back periodically for updates on new class actions and settlement notices.
                  </Text>
                </View>
              )}
            </View>

            <View style={styles.infoSection}>
              <Text style={styles.infoTitle}>About Class Actions</Text>
              <Text style={styles.infoText}>
                Class action lawsuits allow groups of consumers with similar claims to join together in a single case. This makes it economically feasible to hold large corporations accountable for widespread violations of consumer protection laws. Class members may be entitled to compensation, and class actions often result in changes to business practices that benefit all consumers.
              </Text>
              <Text style={styles.infoText}>
                If you receive a class action notice, it means you may be a member of a class. You typically have the right to participate in the class action, opt out if you prefer to pursue your own claim, or object to a proposed settlement. It's important to review any class notice carefully and understand your rights and options.
              </Text>
            </View>
          </Container>
          <Footer />
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    paddingVertical: 48,
  },
  containerDesktop: {
    paddingVertical: 80,
    maxWidth: 900,
    alignSelf: 'center',
    width: '100%',
  },
  title: {
    fontSize: 36,
    fontFamily: Platform.OS === 'web' ? 'Georgia, serif' : 'serif',
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 16,
    lineHeight: 44,
  },
  titleMobile: {
    fontSize: 28,
    lineHeight: 36,
  },
  titleDesktop: {
    fontSize: 48,
    lineHeight: 56,
  },
  subtitle: {
    fontSize: 18,
    color: '#475569',
    marginBottom: 40,
    lineHeight: 28,
  },
  subtitleMobile: {
    fontSize: 16,
    lineHeight: 26,
  },
  noticesSection: {
    marginBottom: 48,
  },
  noticeCard: {
    padding: 24,
    marginBottom: 24,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  noticeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  noticeStatus: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#059669',
    textTransform: 'uppercase',
    letterSpacing: 1,
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: '#d1fae5',
    borderRadius: 4,
  },
  noticeDeadline: {
    fontSize: 14,
    color: '#64748b',
    fontWeight: '600',
  },
  noticeTitle: {
    fontSize: 22,
    fontFamily: Platform.OS === 'web' ? 'Georgia, serif' : 'serif',
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 12,
    lineHeight: 30,
  },
  noticeDescription: {
    fontSize: 16,
    color: '#475569',
    lineHeight: 26,
    marginBottom: 16,
  },
  noticeFooter: {
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#e2e8f0',
    marginTop: 8,
  },
  importantText: {
    fontSize: 14,
    color: '#78350f',
    lineHeight: 22,
  },
  bold: {
    fontWeight: 'bold',
  },
  emptyState: {
    padding: 48,
    textAlign: 'center',
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 12,
  },
  emptyText: {
    fontSize: 16,
    color: '#64748b',
    lineHeight: 26,
  },
  infoSection: {
    marginTop: 32,
    padding: 32,
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: '#2563eb',
  },
  infoTitle: {
    fontSize: 22,
    fontFamily: Platform.OS === 'web' ? 'Georgia, serif' : 'serif',
    fontWeight: 'bold',
    color: '#0f172a',
    marginBottom: 16,
  },
  infoText: {
    fontSize: 15,
    color: '#334155',
    lineHeight: 26,
    marginBottom: 16,
  },
});
